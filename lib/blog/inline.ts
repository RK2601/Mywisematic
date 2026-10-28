// Minimal inline markup for post text: **bold** and [label](url).
export type Inline =
  | { k: "text"; v: string }
  | { k: "bold"; v: string }
  | { k: "link"; v: string; href: string };

export function parseInline(src: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (let m; (m = re.exec(src)); ) {
    if (m.index > last) out.push({ k: "text", v: src.slice(last, m.index) });
    out.push(m[1] !== undefined ? { k: "bold", v: m[1] } : { k: "link", v: m[2], href: m[3] });
    last = re.lastIndex;
  }
  if (last < src.length) out.push({ k: "text", v: src.slice(last) });
  return out;
}

export const plain = (src: string) => parseInline(src).map((x) => x.v).join("");

export const slugify = (s: string) =>
  plain(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
