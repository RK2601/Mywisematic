"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { allPostsForChecks, isPublished } from "@/lib/blog";

type Blog = {
  _id: string;
  title: string;
  creationDate?: string;
  thumbnail?: string;
  content?: Array<{ type: string; content: string }>;
};

export default function BlogsAdminPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    content: "",
    creationDate: new Date().toISOString().split("T")[0],
    thumbnail: null as File | null,
  });

  const loadItems = async () => {
    const data = await adminClientFetch<{ blogs: Blog[] }>("blogs/get");
    setItems(data.blogs || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load blogs"))
      .finally(() => setLoading(false));
  }, []);

  const resetForm = () => {
    setForm({
      title: "",
      content: "",
      creationDate: new Date().toISOString().split("T")[0],
      thumbnail: null,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const sections = [{ type: "paragraph", content: form.content, id: "1" }];
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", JSON.stringify(sections));
    formData.append("creationDate", form.creationDate);
    if (form.thumbnail) formData.append("thumbnail", form.thumbnail);

    try {
      if (editingId) {
        await adminClientFetch(`blogs/update?id=${editingId}`, {
          method: "PUT",
          body: formData,
        });
        toast.success("Blog updated");
      } else {
        await adminClientFetch("blogs/add", {
          method: "POST",
          body: formData,
        });
        toast.success("Blog added");
      }
      resetForm();
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    }
  };

  const handleEdit = (item: Blog) => {
    setEditingId(item._id);
    setForm({
      title: item.title,
      content: item.content?.[0]?.content || "",
      creationDate: item.creationDate?.split("T")[0] || form.creationDate,
      thumbnail: null,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog?")) return;
    try {
      await adminClientFetch(`blogs/delete?id=${id}`, { method: "DELETE" });
      toast.success("Blog deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="Blogs"
        description="Create and manage blog posts."
        action={
          <Button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="rounded-full bg-[#260E3A] hover:bg-[#9E6DD2]"
          >
            Add Blog
          </Button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-[#12121a]/80 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-zinc-300">Title</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border-white/10 bg-[#0a0a0f] text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Creation Date</Label>
              <Input
                type="date"
                value={form.creationDate}
                onChange={(e) =>
                  setForm({ ...form, creationDate: e.target.value })
                }
                className="border-white/10 bg-[#0a0a0f] text-white"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Thumbnail</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm({ ...form, thumbnail: e.target.files?.[0] || null })
              }
              className="border-white/10 bg-[#0a0a0f] text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Content</Label>
            <Textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="min-h-[180px] border-white/10 bg-[#0a0a0f] text-white"
              required
            />
          </div>
          <div className="flex gap-3">
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
          { key: "title", label: "Title" },
          { key: "date", label: "Date" },
          { key: "actions", label: "Actions", className: "w-52" },
        ]}
        rows={items.map((item) => ({
          title: item.title,
          date: item.creationDate
            ? new Date(item.creationDate).toLocaleDateString()
            : "-",
          actions: (
            <div className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/blogs/${item._id}`} target="_blank">
                  View
                </Link>
              </Button>
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
        emptyMessage="No posts created here yet."
      />

      {/* Scheduled articles live in code (lib/blog/posts) and publish on their date; read-only here. */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white">Scheduled articles</h2>
        <p className="mb-4 mt-1 text-sm text-zinc-400">
          Written in the website code; each one goes live automatically at 9 AM Toronto time on its date.
        </p>
        <AdminDataTable
          columns={[
            { key: "title", label: "Title" },
            { key: "category", label: "Category" },
            { key: "date", label: "Publish date" },
            { key: "status", label: "Status" },
            { key: "actions", label: "Actions", className: "w-28" },
          ]}
          rows={[...allPostsForChecks()].reverse().map((post) => {
            const live = isPublished(post);
            return {
              title: post.title,
              category: post.category,
              date: new Date(post.publishAt).toLocaleDateString("en-CA", {
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "America/Toronto",
              }),
              status: (
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    live
                      ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
                      : "border-amber-500/30 bg-amber-500/15 text-amber-300"
                  }`}
                >
                  {live ? "Published" : "Scheduled"}
                </span>
              ),
              actions: live ? (
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/blogs/${post.slug}`} target="_blank">
                    View
                  </Link>
                </Button>
              ) : (
                <span className="text-xs text-zinc-500">Not live yet</span>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
