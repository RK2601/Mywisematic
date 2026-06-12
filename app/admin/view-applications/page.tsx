"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Application = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  jobName: string;
  appliedAt?: string;
  coverLetter?: string;
  cvResume?: string;
};

export default function ViewApplicationsPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Application[]>([]);

  const loadItems = async () => {
    const data = await adminClientFetch<{ applications: Application[] }>(
      "applications/get",
    );
    setItems(data.applications || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load applications"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this application?")) return;
    try {
      await adminClientFetch(`applications/delete?id=${id}`, { method: "DELETE" });
      toast.success("Application deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="View Applications"
        description="Review job applications submitted through the careers page."
      />

      <AdminDataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "job", label: "Job" },
          { key: "date", label: "Applied" },
          { key: "actions", label: "Actions", className: "w-32" },
        ]}
        rows={items.map((item) => ({
          name: item.fullName,
          email: item.email,
          phone: item.phone,
          job: item.jobName,
          date: item.appliedAt
            ? new Date(item.appliedAt).toLocaleDateString()
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
