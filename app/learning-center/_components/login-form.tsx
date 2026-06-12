"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <Card className="overflow-hidden">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Learning Center
            </h2>
            <p className="text-muted-foreground mb-6">
              If you are not able to login, please contact the admin for
              credentials.
              <br />
              <a
                href="mailto:admin@wisematic.ca"
                className="text-primary underline underline-offset-2"
              >
                admin@wisematic.ca
              </a>
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">
              Check out our blogs and articles for public content.
            </p>
            <Link href="/blogs">
              <Button className="w-fit mt-6 rounded-full" variant="outline">
                Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <form className="p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Email</Label>
              <Input
                id="username"
                type="email"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 text-center" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Having trouble?{" "}
              <a
                href="/admin/login"
                className="text-primary underline underline-offset-2"
              >
                Sign in on the admin portal
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
