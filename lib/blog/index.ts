import type { Post } from "./types";
import p01 from "./posts/01-ai-roadmap-small-business";
import p02 from "./posts/02-core-web-vitals";
import p03 from "./posts/03-build-vs-buy-saas";
import batchB from "./posts/batch-b";
import batchC from "./posts/batch-c";
import batchD from "./posts/batch-d";

export const SITE_URL = "https://www.wisematic.ca";

const ALL: Post[] = [p01, p02, p03, ...batchB, ...batchC, ...batchD].sort(
  (a, b) => +new Date(b.publishAt) - +new Date(a.publishAt),
);

// Scheduling: a post is live once its publishAt has passed (checked per request).
export const isPublished = (post: Post, now = Date.now()) => +new Date(post.publishAt) <= now;

export const publishedPosts = (now = Date.now()) => ALL.filter((p) => isPublished(p, now));

export const getPublishedPost = (slug: string, now = Date.now()) =>
  ALL.find((p) => p.slug === slug && isPublished(p, now));

export const allPostsForChecks = () => ALL;

export const readingMinutes = (post: Post) => {
  const text = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "rows" in b ? b.rows.flat().join(" ") : ""))
    .concat(post.takeaways, post.faq.map((f) => `${f.q} ${f.a}`))
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
};
