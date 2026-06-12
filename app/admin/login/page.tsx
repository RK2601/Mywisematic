"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin, checkAdminAuth } from "@/lib/admin/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    checkAdminAuth()
      .then((authenticated) => {
        if (authenticated) {
          router.replace("/admin/dashboard");
        }
      })
      .catch(() => {
        // Stay on login page if auth check fails
      });
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await adminLogin(username.trim(), password);
      toast.success("Login successful!");
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050508] px-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_hsla(260,100%,70%,.2)_0%,_transparent_70%)]" />

      <Card className="relative w-full max-w-md border-white/10 bg-[#12121a]/90 backdrop-blur-md">
        <CardContent className="p-8">
          <div className="mb-8 text-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
              alt="WiseMatic"
              className="mx-auto mb-4 h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">User Login</h1>
            <p className="mt-2 text-zinc-400">Login to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-zinc-300">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-white/10 bg-[#0a0a0f] text-white"
                placeholder="Enter your username"
                autoComplete="username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-white/10 bg-[#0a0a0f] text-white"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && (
              <p className="text-center text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#260E3A] py-6 text-white hover:bg-[#9E6DD2]"
            >
              {submitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
