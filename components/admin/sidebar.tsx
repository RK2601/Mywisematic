"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_NAV, LOGOUT_ICON } from "@/lib/admin/constants";
import { adminLogout } from "@/lib/admin/api-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await adminLogout();
      toast.success("Logged out successfully");
      router.push("/admin/login");
    } catch {
      toast.error("Failed to logout");
    }
  };

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-white/10 bg-[#0a0a0f] px-4 py-6">
      <div className="mb-8 flex items-center gap-3 px-2">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
          alt="WiseMatic"
          className="h-8 w-8 object-contain"
        />
        <span className="text-lg font-semibold text-white">WiseMatic</span>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto">
        {ADMIN_NAV.map((section) => (
          <div key={section.label}>
            <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {section.label}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#9E6DD2]" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <Button
        onClick={handleLogout}
        className="mt-4 w-full rounded-full bg-[#260E3A] py-6 text-white hover:bg-[#9E6DD2]"
      >
        <LOGOUT_ICON className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </aside>
  );
}
