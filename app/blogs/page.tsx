import type { Metadata } from "next";
import BlogsPageHero from "@/app/blogs/_components/hero";
import { BeamsBackground } from "@/components/ui/beams-background";
import { SITE_URL, publishedPosts, readingMinutes } from "@/lib/blog";
import { unsplash } from "@/lib/blog/types";

// Scheduled posts appear on their publish date; re-check at most every 10 minutes.
export const revalidate = 600;

export const metadata: Metadata = {
  title: "Blog: AI, Software, AR/VR and Digital Growth Insights",
  description:
    "Practical, well-researched guides from WiseMatic on AI adoption, custom software, SaaS, AR/VR, game design, SEO and technology strategy for growing businesses.",
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blogs`,
    title: "WiseMatic Blog",
    description:
      "Practical, well-researched technology guides for growing businesses.",
    siteName: "WiseMatic",
  },
};

export default function BlogsPage() {
  const posts = publishedPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    publishAt: p.publishAt,
    minutes: readingMinutes(p),
    image: unsplash(p.hero.src, 1200),
    imageAlt: p.hero.alt,
  }));

  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <BlogsPageHero posts={posts} />
      </BeamsBackground>
    </main>
  );
}
