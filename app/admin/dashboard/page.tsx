"use client";

import { useEffect, useState } from "react";
import { Briefcase, FileText, Mail, MessageSquare } from "lucide-react";
import { adminClientFetch } from "@/lib/admin/api-client";
import { StatCard } from "@/components/admin/stat-card";
import { ActiveJobsChart } from "@/components/admin/active-jobs-chart";
import { AdminLoadingScreen } from "@/components/admin/loading-screen";

type ChartPoint = { month: string; count: number };

function buildMonthlyCounts<T extends { appliedAt?: string; subscribedAt?: string; contactedAt?: string; validFrom?: string }>(
  items: T[],
  dateKey: keyof T,
): ChartPoint[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const now = new Date();
  const points: ChartPoint[] = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthLabel = months[date.getMonth()] || months[0];
    const count = items.filter((item) => {
      const raw = item[dateKey];
      if (!raw || typeof raw !== "string") return false;
      const itemDate = new Date(raw);
      return (
        itemDate.getFullYear() === date.getFullYear() &&
        itemDate.getMonth() === date.getMonth()
      );
    }).length;
    points.push({ month: monthLabel, count });
  }

  return points;
}

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState({
    activeJobs: 0,
    applications: 0,
    newsletters: 0,
    contacts: 0,
  });
  const [chartData, setChartData] = useState<ChartPoint[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [jobsRes, appsRes, newsletterRes, contactsRes] = await Promise.all([
          adminClientFetch<{ jobs?: Array<{ isActive?: boolean; validFrom?: string }>; jobCount?: number }>("jobs/getactive"),
          adminClientFetch<{ applicationCount?: number; applications?: unknown[] }>("applications/get"),
          adminClientFetch<{ subscriberscount?: number; subscribers?: unknown[] }>("newsletters/get"),
          adminClientFetch<{ contactscount?: number; contacts?: unknown[] }>("contactus/get"),
        ]);

        const jobs = jobsRes.jobs || [];
        const activeJobs = jobs.filter((job) => job.isActive).length;

        setStats({
          activeJobs: activeJobs || jobsRes.jobCount || 0,
          applications:
            appsRes.applicationCount ??
            (Array.isArray(appsRes.applications) ? appsRes.applications.length : 0),
          newsletters:
            newsletterRes.subscriberscount ??
            (Array.isArray(newsletterRes.subscribers)
              ? newsletterRes.subscribers.length
              : 0),
          contacts:
            contactsRes.contactscount ??
            (Array.isArray(contactsRes.contacts) ? contactsRes.contacts.length : 0),
        });

        setChartData(buildMonthlyCounts(jobs, "validFrom"));
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load dashboard data. Please sign in again.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) return <AdminLoadingScreen />;

  if (error) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center">
        <h2 className="text-xl font-semibold text-white">Session expired</h2>
        <p className="mt-3 text-zinc-300">{error}</p>
        <a
          href="/admin/login"
          className="mt-6 inline-block rounded-full bg-[#260E3A] px-6 py-3 text-white hover:bg-[#9E6DD2]"
        >
          Back to login
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Hello Admin 👋, Welcome Back!
      </h1>

      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Active Jobs" value={stats.activeJobs} icon={Briefcase} />
        <StatCard
          title="Total Applications"
          value={stats.applications}
          icon={FileText}
        />
        <StatCard title="Newsletters" value={stats.newsletters} icon={Mail} />
        <StatCard title="Contact Us" value={stats.contacts} icon={MessageSquare} />
      </div>

      <ActiveJobsChart data={chartData} />
    </div>
  );
}
