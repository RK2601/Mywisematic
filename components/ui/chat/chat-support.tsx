"use client";

import { Send, Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageContent } from "@/components/ui/chat/chat-message-content";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { ChatAction, ChatAgentResponse } from "@/lib/chat-agent";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  actions?: ChatAction[];
  showContactForm?: boolean;
  suggestions?: string[];
  formSubmitted?: boolean;
};

const GREETING =
  "Hello! 👋 I'm the WiseMatic virtual assistant. I can help you learn about our services, company info, and connect you with our team at info@wisematic.ca. How can I help you today?";

function createGreetingMessage(): Message {
  return {
    id: "1",
    content: GREETING,
    role: "assistant",
    timestamp: new Date(),
    actions: [
      { label: "Our Services", type: "quick_reply", value: "What services do you offer?" },
      { label: "Contact Us", type: "quick_reply", value: "I want to contact someone" },
      { label: "Contact page", type: "link", value: "/contact-us" },
    ],
    suggestions: [
      "What services do you offer?",
      "I want to contact someone",
      "Tell me about AI & ML",
      "Where is your office?",
    ],
  };
}

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [visibleForms, setVisibleForms] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([createGreetingMessage()]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, visibleForms]);

  const handleNewChat = () => {
    setMessages([createGreetingMessage()]);
    setVisibleForms({});
    setInputMessage("");
  };

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: trimmed,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data: ChatAgentResponse = await response.json();
      const messageId = (Date.now() + 1).toString();

      const aiMessage: Message = {
        id: messageId,
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
        actions: data.actions,
        showContactForm: data.showContactForm,
        suggestions: data.suggestions,
      };

      setMessages((prev) => [...prev, aiMessage]);

      if (data.showContactForm) {
        setVisibleForms((prev) => ({ ...prev, [messageId]: true }));
      }
    } catch {
      toast.error("Failed to get a response. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content:
            "I'm having trouble responding right now. You can reach our team directly at info@wisematic.ca or call (+1) 437-600-3669.",
          role: "assistant",
          timestamp: new Date(),
          actions: [
            { label: "Email us", type: "email", value: "info@wisematic.ca" },
            { label: "Call us", type: "phone", value: "+14376003669" },
            { label: "Contact page", type: "link", value: "/contact-us" },
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  }, [isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    await sendMessage(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleShowForm = (messageId: string) => {
    setVisibleForms((prev) => ({ ...prev, [messageId]: true }));
  };

  const handleFormSuccess = (messageId: string) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === messageId ? { ...message, formSubmitted: true } : message,
      ),
    );
    setVisibleForms((prev) => ({ ...prev, [messageId]: false }));

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content:
          "Your message has been sent successfully! Our team will get back to you shortly. Is there anything else I can help you with?",
        role: "assistant",
        timestamp: new Date(),
        suggestions: ["What services do you offer?", "Tell me about WiseMatic"],
      },
    ]);
  };

  return (
    <ExpandableChat size={isFullScreen ? "full" : "lg"} position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center justify-center relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          {isFullScreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
        <h1 className="text-xl font-semibold">WiseMatic Assistant</h1>
        <p>Ask about our services or get in touch with our team.</p>
        <div className="flex gap-2 items-center pt-2">
          <Button variant="secondary" onClick={handleNewChat} disabled={isLoading}>
            New Chat
          </Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList className="w-full">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              className={
                message.role === "user"
                  ? "justify-end w-full max-w-[100%] pl-20 md:pl-24"
                  : "w-full max-w-[100%] pr-12"
              }
            >
              {message.role === "assistant" && (
                <ChatBubbleAvatar
                  src="/chat-bot.svg"
                  className="bg-white"
                  fallback="AI"
                />
              )}
              <ChatBubbleMessage
                className={
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-lg"
                    : "rounded-lg"
                }
              >
                {message.role === "user" ? (
                  message.content
                ) : (
                  <ChatMessageContent
                    content={message.content}
                    actions={message.formSubmitted ? undefined : message.actions}
                    showContactForm={message.showContactForm}
                    showForm={visibleForms[message.id]}
                    suggestions={message.suggestions}
                    onQuickReply={sendMessage}
                    onShowForm={() => handleShowForm(message.id)}
                    onFormSuccess={() => handleFormSuccess(message.id)}
                  />
                )}
              </ChatBubbleMessage>
              {message.role === "user" && (
                <ChatBubbleAvatar
                  src="/chat-user.svg"
                  className="bg-muted-foreground"
                  fallback="US"
                />
              )}
            </ChatBubble>
          ))}
          {isTyping && (
            <ChatBubble className="justify-start w-full max-w-[100%]">
              <ChatBubbleAvatar
                src="/chat-bot.svg"
                className="bg-white"
                fallback="AI"
              />
              <ChatBubbleMessage className="rounded-lg">
                <div className="flex space-x-1">
                  <span className="animate-pulse">•</span>
                  <span className="animate-pulse">•</span>
                  <span className="animate-pulse">•</span>
                </div>
              </ChatBubbleMessage>
            </ChatBubble>
          )}
          <div ref={messagesEndRef} />
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <ChatInput
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            placeholder={isLoading ? "Thinking..." : "Ask about our services..."}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            className="mt-1"
            disabled={isLoading || !inputMessage.trim()}
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
