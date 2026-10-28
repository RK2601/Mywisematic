// Run: npx jiti lib/blog/posts.test.mjs
import assert from "node:assert";
import { allPostsForChecks, publishedPosts, readingMinutes } from "./index";
const all = allPostsForChecks();
assert.strictEqual(all.length, 15, "15 posts");
const slugs = new Set(all.map((p) => p.slug));
assert.strictEqual(slugs.size, 15, "unique slugs");
const dates = all.map((p) => +new Date(p.publishAt)).sort((a, b) => a - b);
for (let i = 1; i < dates.length; i++) {
  const gapDays = (dates[i] - dates[i - 1]) / 864e5;
  assert(gapDays > 1.9 && gapDays < 2.1, `2-day gap at ${i}: ${gapDays}`);
}
for (const p of all) {
  assert(p.description.length >= 110 && p.description.length <= 170, `${p.slug} description length ${p.description.length}`);
  assert(p.title.length <= 75, `${p.slug} title length ${p.title.length}`);
  assert(p.references.length >= 3, `${p.slug} refs`);
  assert(p.faq.length >= 3, `${p.slug} faq`);
  for (const b of p.body) for (const t of ("text" in b ? [b.text] : "items" in b ? b.items : []))
    for (const m of t.matchAll(/\]\((\/[^)]*)\)/g))
      assert(/^\/(services\/(ai-ml|saas|ar-vr|game-dev|digital-marketing|tech-consultation)|blogs\/[a-z0-9-]+)$/.test(m[1]), `${p.slug} bad internal link ${m[1]}`);
}
assert(publishedPosts(Date.parse("2026-10-27T00:00:00Z")).length === 0);
assert(publishedPosts(Date.parse("2026-10-28T14:00:00Z")).length === 1);
assert(publishedPosts(Date.parse("2026-12-01T00:00:00Z")).length === 15);
console.log("posts ok:", all.map((p) => `${p.publishAt.slice(5, 10)} ${readingMinutes(p)}m ${p.slug}`).join("\n"));
