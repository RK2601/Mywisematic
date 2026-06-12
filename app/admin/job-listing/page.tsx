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
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

type Job = {
  _id: string;
  jobName: string;
  jobCategory: string;
  jobType: string;
  jobLocation: string;
  experienceLevel: string;
  validFrom: string;
  validTill: string;
  isActive: boolean;
  jobDescription?: {
    positionOverview?: string;
    keyResponsibilities?: string[];
    qualifications?: string[];
    preferredSkills?: string[];
    whatWeOffer?: string[];
  };
};

const emptyJob = {
  jobName: "",
  jobCategory: "",
  jobType: "Full-time",
  jobLocation: "",
  experienceLevel: "",
  validFrom: new Date().toISOString().split("T")[0],
  validTill: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  isActive: true,
  positionOverview: "",
  keyResponsibilities: "",
  qualifications: "",
  preferredSkills: "",
  whatWeOffer: "",
};

export default function JobListingAdminPage() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyJob);

  const loadItems = async () => {
    const data = await adminClientFetch<{ jobs: Job[] }>("jobs/get");
    setItems(data.jobs || []);
  };

  useEffect(() => {
    loadItems()
      .catch(() => toast.error("Failed to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  const resetForm = () => {
    setForm(emptyJob);
    setEditingId(null);
    setShowForm(false);
  };

  const buildPayload = () => ({
    jobName: form.jobName,
    jobCategory: form.jobCategory,
    jobType: form.jobType,
    jobLocation: form.jobLocation,
    experienceLevel: form.experienceLevel,
    validFrom: form.validFrom,
    validTill: form.validTill,
    isActive: form.isActive,
    jobDescription: {
      positionOverview: form.positionOverview,
      keyResponsibilities: form.keyResponsibilities
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      qualifications: form.qualifications
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      preferredSkills: form.preferredSkills
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      whatWeOffer: form.whatWeOffer
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (editingId) {
        await adminClientFetch(`jobs/update?id=${editingId}`, {
          method: "PUT",
          body: buildPayload(),
        });
        toast.success("Job updated");
      } else {
        await adminClientFetch("jobs/add", {
          method: "POST",
          body: buildPayload(),
        });
        toast.success("Job added");
      }
      resetForm();
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const data = await adminClientFetch<{ job: Job }>(`jobs/get/${id}`);
      const job = data.job;
      setEditingId(id);
      setForm({
        jobName: job.jobName,
        jobCategory: job.jobCategory,
        jobType: job.jobType,
        jobLocation: job.jobLocation,
        experienceLevel: job.experienceLevel,
        validFrom: job.validFrom?.split("T")[0] || emptyJob.validFrom,
        validTill: job.validTill?.split("T")[0] || emptyJob.validTill,
        isActive: job.isActive,
        positionOverview: job.jobDescription?.positionOverview || "",
        keyResponsibilities: (job.jobDescription?.keyResponsibilities || []).join("\n"),
        qualifications: (job.jobDescription?.qualifications || []).join("\n"),
        preferredSkills: (job.jobDescription?.preferredSkills || []).join("\n"),
        whatWeOffer: (job.jobDescription?.whatWeOffer || []).join("\n"),
      });
      setShowForm(true);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to load job");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job listing?")) return;
    try {
      await adminClientFetch(`jobs/delete?id=${id}`, { method: "DELETE" });
      toast.success("Job deleted");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    }
  };

  const toggleActive = async (job: Job) => {
    try {
      await adminClientFetch(`jobs/update?id=${job._id}`, {
        method: "PUT",
        body: { ...job, isActive: !job.isActive },
      });
      toast.success("Job status updated");
      await loadItems();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Update failed");
    }
  };

  if (loading) return <AdminLoadingScreen />;

  return (
    <div>
      <AdminPageHeader
        title="Job Listing"
        description="Manage open positions on the careers page."
        action={
          <Button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="rounded-full bg-[#260E3A] hover:bg-[#9E6DD2]"
          >
            Add Job
          </Button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-[#12121a]/80 p-6 md:grid-cols-2"
        >
          {[
            ["jobName", "Job Name"],
            ["jobCategory", "Category"],
            ["jobType", "Job Type"],
            ["jobLocation", "Location"],
            ["experienceLevel", "Experience Level"],
          ].map(([key, label]) => (
            <div key={key} className="space-y-2">
              <Label className="text-zinc-300">{label}</Label>
              <Input
                value={form[key as keyof typeof form] as string}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="border-white/10 bg-[#0a0a0f] text-white"
                required
              />
            </div>
          ))}
          <div className="space-y-2">
            <Label className="text-zinc-300">Valid From</Label>
            <Input
              type="date"
              value={form.validFrom}
              onChange={(e) => setForm({ ...form, validFrom: e.target.value })}
              className="border-white/10 bg-[#0a0a0f] text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-zinc-300">Valid Till</Label>
            <Input
              type="date"
              value={form.validTill}
              onChange={(e) => setForm({ ...form, validTill: e.target.value })}
              className="border-white/10 bg-[#0a0a0f] text-white"
            />
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <Switch
              checked={form.isActive}
              onCheckedChange={(checked) => setForm({ ...form, isActive: checked })}
            />
            <Label className="text-zinc-300">Active</Label>
          </div>
          {(
            [
              ["positionOverview", "Position Overview", false],
              ["keyResponsibilities", "Key Responsibilities (one per line)", true],
              ["qualifications", "Qualifications (one per line)", true],
              ["preferredSkills", "Preferred Skills (one per line)", true],
              ["whatWeOffer", "What We Offer (one per line)", true],
            ] as const
          ).map(([key, label, multiline]) => (
            <div key={key} className={`space-y-2 ${multiline ? "md:col-span-2" : ""}`}>
              <Label className="text-zinc-300">{label}</Label>
              {multiline ? (
                <Textarea
                  value={form[key as keyof typeof form] as string}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="min-h-[100px] border-white/10 bg-[#0a0a0f] text-white"
                />
              ) : (
                <Textarea
                  value={form[key as keyof typeof form] as string}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="border-white/10 bg-[#0a0a0f] text-white"
                />
              )}
            </div>
          ))}
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
          { key: "jobName", label: "Job" },
          { key: "category", label: "Category" },
          { key: "location", label: "Location" },
          { key: "status", label: "Status" },
          { key: "actions", label: "Actions", className: "w-56" },
        ]}
        rows={items.map((item) => ({
          jobName: item.jobName,
          category: item.jobCategory,
          location: item.jobLocation,
          status: item.isActive ? "Active" : "Inactive",
          actions: (
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(item._id)}>
                Edit
              </Button>
              <Button size="sm" variant="outline" onClick={() => toggleActive(item)}>
                {item.isActive ? "Deactivate" : "Activate"}
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
