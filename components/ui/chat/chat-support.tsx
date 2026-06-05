"use client";
import { Send, Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Message type definition
type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initial greeting message
  useEffect(() => {
    setMessages([
      {
        id: "1",
        content: "Hello! How can I help you today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle new chat
  const handleNewChat = () => {
    setMessages([
      {
        id: "1",
        content: "Hello! How can I help you today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
  };

  // Handle message submission
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch("https://srv681293.hstgr.cloud:8053/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: inputMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again." + error,
        variant: "destructive",
      });
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "It seems like I'm not getting a response right now. If there's a delay, no worries—I'll try again shortly. Let me know if you need help getting back on track!",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
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
        <h1 className="text-xl font-semibold">Ask Anything ✨</h1>
        <p>Our AI assistant’s ready to help.</p>
        <div className="flex gap-2 items-center pt-2">
          <Button
            variant="secondary"
            onClick={handleNewChat}
            disabled={isLoading}
          >
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
                {message.content}
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
            placeholder={isLoading ? "AI is typing..." : "Type your message..."}
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
