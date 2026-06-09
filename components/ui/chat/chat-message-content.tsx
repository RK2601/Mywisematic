"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/lib/utils";
import { toast } from "sonner";
import type { ChatAction } from "@/lib/chat-agent";

type ChatInlineFormProps = {
  onSuccess: () => void;
};

export function ChatInlineForm({ onSuccess }: ChatInlineFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !name || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseURL}/api/contactus/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, phone, message }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || "Failed to submit form");
      }

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success("Message sent! Our team will get back to you soon.");
      onSuccess();
    } catch {
      toast.error("Something went wrong. Please email info@wisematic.ca directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-3 rounded-lg border bg-background/80 p-3">
      <p className="text-sm font-medium">Quick contact form</p>
      <div className="grid gap-2">
        <Label htmlFor="chat-name" className="text-xs">
          Name
        </Label>
        <Input
          id="chat-name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="chat-email" className="text-xs">
          Email
        </Label>
        <Input
          id="chat-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="chat-phone" className="text-xs">
          Phone
        </Label>
        <Input
          id="chat-phone"
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="chat-message" className="text-xs">
          Message
        </Label>
        <Textarea
          id="chat-message"
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[80px]"
          required
        />
      </div>
      <Button type="submit" className="w-full" size="sm" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function renderTextWithLinks(text: string) {
  const parts = text.split(/(\/[\w\-/]+|info@wisematic\.ca|sales@wisematic\.ca|\(\+1\) 437-600-3669)/g);

  return parts.map((part, index) => {
    if (part.startsWith("/")) {
      return (
        <Link key={index} href={part} className="text-primary underline underline-offset-2">
          {part}
        </Link>
      );
    }
    if (part.includes("@wisematic.ca")) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="text-primary underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    if (part.includes("437-600-3669")) {
      return (
        <a
          key={index}
          href="tel:+14376003669"
          className="text-primary underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

type ChatMessageContentProps = {
  content: string;
  actions?: ChatAction[];
  showContactForm?: boolean;
  suggestions?: string[];
  onQuickReply: (text: string) => void;
  onShowForm: () => void;
  onFormSuccess: () => void;
  showForm?: boolean;
};

export function ChatMessageContent({
  content,
  actions,
  showContactForm,
  suggestions,
  onQuickReply,
  onShowForm,
  onFormSuccess,
  showForm,
}: ChatMessageContentProps) {
  return (
    <div className="space-y-3">
      <div className="text-sm leading-relaxed">{renderTextWithLinks(content)}</div>

      {actions && actions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {actions.map((action) => {
            if (action.type === "link") {
              return (
                <Button key={action.label} variant="outline" size="sm" asChild>
                  <Link href={action.value}>{action.label}</Link>
                </Button>
              );
            }
            if (action.type === "email") {
              return (
                <Button key={action.label} variant="outline" size="sm" asChild>
                  <a href={`mailto:${action.value}`}>{action.label}</a>
                </Button>
              );
            }
            if (action.type === "phone") {
              return (
                <Button key={action.label} variant="outline" size="sm" asChild>
                  <a href={`tel:${action.value}`}>{action.label}</a>
                </Button>
              );
            }
            if (action.type === "show_form") {
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  onClick={onShowForm}
                >
                  {action.label}
                </Button>
              );
            }
            return (
              <Button
                key={action.label}
                variant="outline"
                size="sm"
                onClick={() => onQuickReply(action.value)}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
      )}

      {(showContactForm || showForm) && <ChatInlineForm onSuccess={onFormSuccess} />}

      {suggestions && suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onQuickReply(suggestion)}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
