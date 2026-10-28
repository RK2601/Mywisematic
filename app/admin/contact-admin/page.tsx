"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  contactedAt?: string;
};

export default function ContactAdminPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Contact[]>([]);
  const [open, setOpen] = useState<Contact | null>(null);

  const loadItems = async () => {
    const data = await adminClientFetch<{ contacts: Contact[] }>("contactus/get");
    setItems(data.contacts || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load contact submissions"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    try {
      await adminClientFetch(`contactus/delete?id=${id}`, { method: "DELETE" });
      toast.success("Submission deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="Contact Us Submissions"
        description="Messages submitted through the contact forms."
      />

      <AdminDataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "message", label: "Message" },
          { key: "date", label: "Date" },
          { key: "actions", label: "Actions", className: "w-32" },
        ]}
        rows={items.map((item) => ({
          name: item.name,
          email: item.email,
          phone: item.phone,
          message: (
            <button
              type="button"
              onClick={() => setOpen(item)}
              className="max-w-md text-left hover:text-foreground"
              title="Read full message"
            >
              <span className="line-clamp-2">{item.message}</span>
              <span className="mt-1 block text-xs text-[#399AD2]">Read full message</span>
            </button>
          ),
          date: item.contactedAt
            ? new Date(item.contactedAt).toLocaleDateString()
            : "-",
          actions: (
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </Button>
          ),
        }))}
      />

      <Sheet open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          {open && (
            <>
              <SheetHeader>
                <SheetTitle>{open.name}</SheetTitle>
                <SheetDescription>
                  {open.contactedAt
                    ? new Date(open.contactedAt).toLocaleString()
                    : ""}
                </SheetDescription>
              </SheetHeader>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a href={`mailto:${open.email}`} className="text-[#399AD2] hover:underline">
                      {open.email}
                    </a>
                  </dd>
                </div>
                {open.phone && (
                  <div>
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>{open.phone}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted-foreground">Message</dt>
                  <dd className="mt-1 whitespace-pre-wrap break-words rounded-xl border border-white/10 bg-white/[0.03] p-4 leading-relaxed">
                    {open.message}
                  </dd>
                </div>
              </dl>
              <Button asChild className="mt-6 w-full">
                <a href={`mailto:${open.email}?subject=${encodeURIComponent("Re: your message to WiseMatic")}`}>
                  Reply by email
                </a>
              </Button>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
