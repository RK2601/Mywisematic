import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/lib/utils";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

const INFO = [
  {
    icon: Mail,
    title: "Email us",
    lines: ["info@wisematic.ca", "sales@wisematic.ca"],
    email: true,
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["401, 180 Duncan Mills Road", "Toronto, ON, M3B 1Z6"],
  },
  {
    icon: Clock,
    title: "Response time",
    lines: ["We reply within one business day"],
  },
];

const fieldClass =
  "h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-[#399AD2]/60 focus-visible:ring-[#399AD2]/30";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) || "").trim();
    const payload = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      message: get("message"),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${baseURL}/api/contactus/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form");
      }
      formRef.current?.reset();
      setSent(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 mx-auto w-full max-w-5xl rounded-3xl bg-gradient-to-br from-[#399AD2]/50 via-white/10 to-purple-500/40 p-px shadow-[0_0_80px_-20px_rgba(57,154,210,0.45)]"
    >
      <div className="grid overflow-hidden rounded-3xl bg-background/80 backdrop-blur-xl md:grid-cols-[2fr_3fr]">
        <div className="relative flex flex-col gap-8 overflow-hidden p-8 md:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#399AD2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              Tell us about your idea. We&#39;ll get back to you with next
              steps.
            </p>
          </div>
          <ul className="relative space-y-4">
            {INFO.map(({ icon: Icon, title, lines, email }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#399AD2]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#399AD2]/15 text-[#399AD2]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-medium">{title}</p>
                  {lines.map((l) =>
                    email ? (
                      <a
                        key={l}
                        href={`mailto:${l}`}
                        className="block text-muted-foreground hover:text-foreground"
                      >
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-muted-foreground">
                        {l}
                      </p>
                    ),
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-10">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 text-center"
                role="status"
              >
                <CheckCircle2 className="h-16 w-16 text-[#399AD2]" />
                <h3 className="text-2xl font-semibold">Message sent!</h3>
                <p className="max-w-xs text-muted-foreground">
                  Thanks for reaching out. Our team will get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 rounded-xl"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={fieldClass}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={fieldClass}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">
                    Phone{" "}
                    <span className="font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals and timeline..."
                    className={`${fieldClass} h-auto min-h-[150px] resize-none py-3`}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group h-12 rounded-xl bg-gradient-to-r from-[#399AD2] to-purple-500 text-base font-medium text-white shadow-lg shadow-[#399AD2]/20 transition-all hover:opacity-90 hover:shadow-[#399AD2]/40"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
