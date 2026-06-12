"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
          message: <span className="line-clamp-2 max-w-md">{item.message}</span>,
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
    </div>
  );
}
