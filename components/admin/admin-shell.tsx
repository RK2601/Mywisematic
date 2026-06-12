"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkAdminAuth } from "@/lib/admin/api-client";
import { AdminSidebar } from "./sidebar";
import { AdminLoadingScreen } from "./loading-screen";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setReady(true);
      return;
    }

    let active = true;

    checkAdminAuth()
      .then((authenticated) => {
        if (!active) return;
        if (!authenticated) {
          router.replace("/admin/login");
          return;
        }
        setReady(true);
      })
      .catch(() => {
        if (active) {
          router.replace("/admin/login");
        }
      });

    return () => {
      active = false;
    };
  }, [isLoginPage, pathname, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!ready) {
    return <AdminLoadingScreen />;
  }

  return (
    <div className="flex min-h-screen bg-[#050508] text-white">
      <AdminSidebar />
      <main className="relative flex-1 overflow-y-auto">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_hsla(260,100%,70%,.15)_0%,_transparent_70%)]" />
        <div className="relative p-8">{children}</div>
      </main>
    </div>
  );
}
