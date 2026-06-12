"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  content: string;
  type: string;
  avatar?: string;
};

export default function TestimonialsAdminPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
    type: "client",
    content: "",
    avatar: null as File | null,
  });

  const loadItems = async () => {
    const data = await adminClientFetch<{ testimonials: Testimonial[] }>(
      "testimonials/get",
    );
    setItems(data.testimonials || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load testimonials"))
      .finally(() => setLoading(false));
  }, []);

  const resetForm = () => {
    setForm({ name: "", role: "", type: "client", content: "", avatar: null });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("type", form.type);
    formData.append("content", form.content);
    if (form.avatar) formData.append("avatar", form.avatar);

    try {
      if (editingId) {
        await adminClientFetch(`testimonials/update?id=${editingId}`, {
          method: "PUT",
          body: formData,
        });
        toast.success("Testimonial updated");
      } else {
        await adminClientFetch("testimonials/add", {
          method: "POST",
          body: formData,
        });
        toast.success("Testimonial added");
      }
      resetForm();
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    }
  };

  const handleEdit = (item: Testimonial) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      role: item.role,
      type: item.type,
      content: item.content,
      avatar: null,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    try {
      await adminClientFetch(`testimonials/delete?id=${id}`, {
        method: "DELETE",
        body: { id },
      });
      toast.success("Testimonial deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="Testimonials"
        description="Manage customer testimonials displayed on the website."
        action={
          <Button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="rounded-full bg-[#260E3A] hover:bg-[#9E6DD2]"
          >
            Add Testimonial
          </Button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-[#12121a]/80 p-6 md:grid-cols-2"
        >
          <div className="space-y-2">
            <Label className="text-zinc-300">Name</Label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-white/10 bg-[#0a0a0f] text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Role</Label>
            <Input
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="border-white/10 bg-[#0a0a0f] text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Type</Label>
            <Input
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="border-white/10 bg-[#0a0a0f] text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Avatar</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({ ...form, avatar: e.target.files?.[0] || null })
              }
              className="border-white/10 bg-[#0a0a0f] text-white"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className="text-zinc-300">Content</Label>
            <Textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="min-h-[120px] border-white/10 bg-[#0a0a0f] text-white"
              required
            />
          </div>
          <div className="flex gap-3 md:col-span-2">
            <Button type="submit" className="rounded-full bg-[#260E3A] hover:bg-[#9E6DD2]">
              {editingId ? "Update" : "Save"}
            </Button>
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          </div>
        </form>
      )}

      <AdminDataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "type", label: "Type" },
          { key: "content", label: "Content" },
          { key: "actions", label: "Actions", className: "w-40" },
        ]}
        rows={items.map((item) => ({
          name: item.name,
          role: item.role,
          type: item.type,
          content: (
            <span className="line-clamp-2 max-w-md">{item.content}</span>
          ),
          actions: (
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </Button>
            </div>
          ),
        }))}
      />
    </div>
  );
}
