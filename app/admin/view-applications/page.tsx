"use client";

import { useEffect, useState } from "react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { AdminPageHeader } from "@/components/admin/page-header";
import { AdminDataTable } from "@/components/admin/data-table";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";
import { ApplicationDocumentLink } from "@/components/admin/application-document-link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "sonner";

type Status = "new" | "reviewing" | "shortlisted" | "rejected" | "hired";

type Application = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  jobName: string;
  appliedAt?: string;
  coverLetter?: string;
  cvResume?: string;
  status?: Status;
  notes?: string;
};

const STATUSES: { value: Status; label: string; className: string }[] = [
  {
    value: "new",
    label: "New",
    className: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  {
    value: "reviewing",
    label: "Reviewing",
    className: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    value: "shortlisted",
    label: "Shortlisted",
    className: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  {
    value: "rejected",
    label: "Rejected",
    className: "bg-red-500/15 text-red-300 border-red-500/30",
  },
  {
    value: "hired",
    label: "Hired",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
];

const statusOf = (s?: Status) =>
  STATUSES.find((x) => x.value === (s || "new"))!;

function StatusSelect({
  value,
  onChange,
}: {
  value?: Status;
  onChange: (s: Status) => void;
}) {
  const current = statusOf(value);
  return (
    <select
      aria-label="Application status"
      value={current.value}
      onChange={(e) => onChange(e.target.value as Status)}
      className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#399AD2]/40 ${current.className}`}
    >
      {STATUSES.map((s) => (
        <option
          key={s.value}
          value={s.value}
          className="bg-zinc-900 text-zinc-100"
        >
          {s.label}
        </option>
      ))}
    </select>
  );
}

export default function ViewApplicationsPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Application[]>([]);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);

  const open = items.find((i) => i._id === openId) || null;

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

  const update = async (
    id: string,
    patch: { status?: Status; notes?: string },
  ) => {
    const previous = items;
    setItems((list) =>
      list.map((i) => (i._id === id ? { ...i, ...patch } : i)),
    );
    try {
      await adminClientFetch(`applications/update?id=${id}`, {
        method: "PATCH",
        body: patch,
      });
      return true;
    } catch (error) {
      setItems(previous);
      toast.error(error instanceof Error ? error.message : "Update failed");
      return false;
    }
  };

  const handleStatus = async (id: string, status: Status) => {
    if (await update(id, { status }))
      toast.success(`Marked as ${statusOf(status).label}`);
  };

  const openDetails = (item: Application) => {
    setOpenId(item._id);
    setNotes(item.notes || "");
  };

  const saveNotes = async () => {
    if (!open) return;
    setSavingNotes(true);
    if (await update(open._id, { notes })) toast.success("Notes saved");
    setSavingNotes(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this application?")) return;
    try {
      await adminClientFetch(`applications/delete?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Application deleted");
      setOpenId(null);
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  const counts = Object.fromEntries(
    STATUSES.map((s) => [
      s.value,
      items.filter((i) => (i.status || "new") === s.value).length,
    ]),
  );
  const visible =
    filter === "all"
      ? items
      : items.filter((i) => (i.status || "new") === filter);
  const tabs = [
    { value: "all" as const, label: "All", count: items.length },
    ...STATUSES.map((s) => ({
      value: s.value,
      label: s.label,
      count: counts[s.value],
    })),
  ];

  return (
    <div>
      <AdminPageHeader
        title="View Applications"
        description="Review job applications submitted through the careers page."
      />

      <div
        className="mb-4 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter by status"
      >
        {tabs.map((t) => (
          <button
            key={t.value}
            role="tab"
            aria-selected={filter === t.value}
            onClick={() => setFilter(t.value)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              filter === t.value
                ? "border-[#399AD2]/60 bg-[#399AD2]/15 text-foreground"
                : "border-white/10 text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label} <span className="ml-1 opacity-60">{t.count}</span>
          </button>
        ))}
      </div>

      <AdminDataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "job", label: "Job" },
          { key: "date", label: "Applied" },
          { key: "status", label: "Status" },
          { key: "actions", label: "Actions", className: "w-52" },
        ]}
        rows={visible.map((item) => ({
          name: (
            <div>
              <p className="font-medium">{item.fullName}</p>
              <p className="text-xs text-muted-foreground">{item.email}</p>
            </div>
          ),
          job: item.jobName,
          date: item.appliedAt
            ? new Date(item.appliedAt).toLocaleDateString()
            : "-",
          status: (
            <StatusSelect
              value={item.status}
              onChange={(s) => handleStatus(item._id, s)}
            />
          ),
          actions: (
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => openDetails(item)}
              >
                View details
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

      <Sheet open={!!open} onOpenChange={(v) => !v && setOpenId(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          {open && (
            <>
              <SheetHeader>
                <SheetTitle>{open.fullName}</SheetTitle>
                <SheetDescription>
                  {open.jobName}
                  {open.appliedAt
                    ? ` · applied ${new Date(open.appliedAt).toLocaleString()}`
                    : ""}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="mb-2 text-muted-foreground">Status</p>
                  <StatusSelect
                    value={open.status}
                    onChange={(s) => handleStatus(open._id, s)}
                  />
                </div>
                <dl className="grid grid-cols-[100px_1fr] gap-y-3">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${open.email}`}
                      className="break-all text-[#399AD2] hover:underline"
                    >
                      {open.email}
                    </a>
                  </dd>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd>{open.phone || "-"}</dd>
                  <dt className="text-muted-foreground">Resume</dt>
                  <dd>
                    <ApplicationDocumentLink
                      value={open.cvResume}
                      fallbackLabel="Resume"
                    />
                  </dd>
                  <dt className="text-muted-foreground">Cover letter</dt>
                  <dd>
                    <ApplicationDocumentLink
                      value={open.coverLetter}
                      fallbackLabel="Cover Letter"
                    />
                  </dd>
                </dl>
                <div>
                  <label
                    htmlFor="app-notes"
                    className="mb-2 block text-muted-foreground"
                  >
                    Private notes
                  </label>
                  <Textarea
                    id="app-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Interview feedback, next steps..."
                    className="min-h-[120px]"
                  />
                  <Button
                    size="sm"
                    className="mt-2"
                    onClick={saveNotes}
                    disabled={savingNotes || notes === (open.notes || "")}
                  >
                    {savingNotes ? "Saving..." : "Save notes"}
                  </Button>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={`mailto:${open.email}?subject=${encodeURIComponent(`Your application for ${open.jobName} at WiseMatic`)}`}
                  >
                    Email applicant
                  </a>
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
