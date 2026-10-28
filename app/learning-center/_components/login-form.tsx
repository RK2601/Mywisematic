"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpen, Eye, EyeOff, GraduationCap, Loader2, Mail } from "lucide-react";

const fieldClass =
  "h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-[#399AD2]/60 focus-visible:ring-[#399AD2]/30";
import Link from "next/link";
import { toast } from "sonner";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Email and password are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = { username: username.trim(), password };

      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        setError(
          data.error ||
            data.message ||
            "Invalid username or password. Please try again.",
        );
        return;
      }

      toast.success("Login successful! Redirecting to your dashboard...");
      window.location.href = data.redirectUrl || "/admin/dashboard";
      return;
    } catch {
      setError("Something went wrong. Please try again later.");
      toast.error("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-5xl rounded-3xl bg-gradient-to-br from-[#399AD2]/50 via-white/10 to-purple-500/40 p-px shadow-[0_0_80px_-20px_rgba(57,154,210,0.45)]">
      <div className="grid overflow-hidden rounded-3xl bg-background/80 backdrop-blur-xl md:grid-cols-2">
        <div className="relative flex flex-col justify-between gap-10 overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#399AD2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#399AD2]/15 text-[#399AD2]">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl font-semibold">
              Welcome to the{" "}
              <span
                className="text-[#399AD2]"
                style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}
              >
                Learning Center
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sign in to access your courses and resources.
            </p>
          </div>
          <div className="relative space-y-4">
            <a
              href="mailto:admin@wisematic.ca"
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#399AD2]/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#399AD2]/15 text-[#399AD2]">
                <Mail className="h-5 w-5" />
              </span>
              <span className="text-sm">
                <span className="block font-medium">Need access?</span>
                <span className="text-muted-foreground">admin@wisematic.ca</span>
              </span>
            </a>
            <Link
              href="/blogs"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#399AD2]/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="flex-1 text-sm">
                <span className="block font-medium">Read our blogs</span>
                <span className="text-muted-foreground">Public articles and insights</span>
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <form
          className="flex flex-col justify-center gap-5 border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-12"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 className="text-2xl font-semibold">Sign in</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your credentials to access your account.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Email</Label>
            <Input
              id="username"
              type="email"
              placeholder="you@company.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className={fieldClass}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className={`${fieldClass} pr-12`}
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          {error && (
            <p
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400"
              role="alert"
            >
              {error}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-12 rounded-xl bg-gradient-to-r from-[#399AD2] to-purple-500 text-base font-medium text-white shadow-lg shadow-[#399AD2]/20 transition-all hover:opacity-90 hover:shadow-[#399AD2]/40"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Having trouble?{" "}
            <a href="/admin/login" className="text-[#399AD2] hover:underline">
              Sign in on the admin portal
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
