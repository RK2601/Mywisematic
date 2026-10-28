import type { MetadataRoute } from "next";
import { SITE_URL, publishedPosts } from "@/lib/blog";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";

// Re-generated at most every hour so newly scheduled posts appear.
export const revalidate = 3600;

const PAGES = [
  "",
  "/about-us",
  "/services",
  "/services/ai-ml",
  "/services/saas",
  "/services/ar-vr",
  "/services/game-dev",
  "/services/digital-marketing",
  "/services/tech-consultation",
  "/careers",
  "/contact-us",
  "/blogs",
];

async function activeJobs(): Promise<MetadataRoute.Sitemap> {
  try {
    await connectDB();
    const jobs = await Job.find({ isActive: true, validTill: { $gte: new Date() } }, { _id: 1, updatedAt: 1 }).lean();
    return jobs.map((j) => ({
      url: `${SITE_URL}/careers/${String(j._id)}`,
      lastModified: (j as { updatedAt?: Date }).updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));
  } catch {
    return []; // sitemap still works without the database
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...(await activeJobs()),
    ...PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path ? 0.7 : 1,
    })),
    ...publishedPosts().map((p) => ({
      url: `${SITE_URL}/blogs/${p.slug}`,
      lastModified: p.publishAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
