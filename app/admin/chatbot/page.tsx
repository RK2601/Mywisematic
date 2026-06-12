"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type ChatbotDoc = {
  _id: string;
  text: string;
};

const STORAGE_KEY = "wisematic_chatbot_docs";

export default function ChatbotAdminPage() {
  const [items, setItems] = useState<ChatbotDoc[]>([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      const defaults = [
        { _id: "1", text: "WiseMatic offers AI/ML, SaaS, Data Analytics, AR/VR, Game Dev, Digital Marketing, and Tech Consultation." },
        { _id: "2", text: "Contact us at info@wisematic.ca or (+1) 437-600-3669." },
      ];
      setItems(defaults);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    }
  }, []);

  const persist = (next: ChatbotDoc[]) => {
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim()) return;

    if (editingId) {
      persist(
        items.map((item) =>
          item._id === editingId ? { ...item, text: text.trim() } : item,
        ),
      );
      toast.success("Document updated");
    } else {
      persist([
        ...items,
        { _id: Date.now().toString(), text: text.trim() },
      ]);
      toast.success("Document added");
    }

    setText("");
    setEditingId(null);
  };

  const handleEdit = (item: ChatbotDoc) => {
    setEditingId(item._id);
    setText(item.text);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this chatbot document?")) return;
    persist(items.filter((item) => item._id !== id));
    toast.success("Document deleted");
  };

  return (
    <div>
      <AdminPageHeader
        title="Chatbot"
        description="Manage chatbot knowledge documents used by the website assistant."
      />

      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-xl border border-white/10 bg-[#12121a]/80 p-6"
      >
        <div className="space-y-2">
          <Label className="text-zinc-300">Document Text</Label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[120px] border-white/10 bg-[#0a0a0f] text-white"
            placeholder="Add chatbot knowledge..."
            required
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" className="rounded-full bg-[#260E3A] hover:bg-[#9E6DD2]">
            {editingId ? "Update Document" : "Add Document"}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setEditingId(null);
                setText("");
              }}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>

      <AdminDataTable
        columns={[
          { key: "text", label: "Document" },
          { key: "actions", label: "Actions", className: "w-40" },
        ]}
        rows={items.map((item) => ({
          text: item.text,
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
