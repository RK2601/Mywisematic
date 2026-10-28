// Blog posts live in code (lib/blog/posts) so they render on the server for SEO
// and publish themselves on `publishAt` without a database or cron job.

export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "quote"; text: string; cite?: string }
  | { t: "callout"; title: string; text: string; tone?: "tip" | "warn" }
  | { t: "checklist"; title: string; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "img"; src: string; alt: string; caption?: string };

export type Reference = { title: string; publisher: string; url: string };

export type Post = {
  slug: string;
  title: string;
  description: string; // meta description, ~150 chars
  publishAt: string; // ISO date; hidden until then
  category: string;
  keywords: string[];
  hero: { src: string; alt: string };
  service: { label: string; href: string }; // related WiseMatic service for the CTA
  takeaways: string[];
  body: Block[];
  faq: { q: string; a: string }[];
  references: Reference[];
};

// Small builders keep post files readable.
export const h2 = (text: string): Block => ({ t: "h2", text });
export const h3 = (text: string): Block => ({ t: "h3", text });
export const p = (text: string): Block => ({ t: "p", text });
export const ul = (...items: string[]): Block => ({ t: "ul", items });
export const ol = (...items: string[]): Block => ({ t: "ol", items });
export const quote = (text: string, cite?: string): Block => ({ t: "quote", text, cite });
export const tip = (title: string, text: string): Block => ({ t: "callout", title, text, tone: "tip" });
export const warn = (title: string, text: string): Block => ({ t: "callout", title, text, tone: "warn" });
export const checklist = (title: string, ...items: string[]): Block => ({ t: "checklist", title, items });
export const table = (head: string[], ...rows: string[][]): Block => ({ t: "table", head, rows });
export const img = (id: string, alt: string, caption?: string): Block => ({
  t: "img",
  src: unsplash(id),
  alt,
  caption,
});

export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
