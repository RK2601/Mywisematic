"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Subscriber = {
  _id: string;
  email: string;
  subscribedAt?: string;
};

export default function NewsletterAdminPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Subscriber[]>([]);

  const loadItems = async () => {
    const data = await adminClientFetch<{ subscribers: Subscriber[] }>(
      "newsletters/get",
    );
    setItems(data.subscribers || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load newsletter subscribers"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this subscriber?")) return;
    try {
      await adminClientFetch(`newsletters/delete?id=${id}`, { method: "DELETE" });
      toast.success("Subscriber deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="Newsletter"
        description="Manage newsletter subscribers from the website footer."
      />

      <AdminDataTable
        columns={[
          { key: "email", label: "Email" },
          { key: "date", label: "Subscribed" },
          { key: "actions", label: "Actions", className: "w-32" },
        ]}
        rows={items.map((item) => ({
          email: item.email,
          date: item.subscribedAt
            ? new Date(item.subscribedAt).toLocaleDateString()
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
