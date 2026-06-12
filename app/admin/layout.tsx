import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "WiseMatic Admin",
  description: "WiseMatic admin dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      <AdminShell>{children}</AdminShell>
      <Toaster />
    </div>
  );
}
