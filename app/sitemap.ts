import type { MetadataRoute } from "next";
import { SITE_URL, publishedPosts } from "@/lib/blog";

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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.7 : 1 })),
    ...publishedPosts().map((p) => ({
      url: `${SITE_URL}/blogs/${p.slug}`,
      lastModified: p.publishAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
