// Run: node --experimental-strip-types lib/blog/inline.test.mjs
import assert from "node:assert";
const { parseInline, slugify, plain } = await import("./inline.ts");
assert.deepStrictEqual(parseInline("a **b** [c](https://x.y) d"), [
  { k: "text", v: "a " }, { k: "bold", v: "b" }, { k: "text", v: " " },
  { k: "link", v: "c", href: "https://x.y" }, { k: "text", v: " d" },
]);
assert.deepStrictEqual(parseInline("plain"), [{ k: "text", v: "plain" }]);
assert.strictEqual(plain("**Step 1:** go [here](/x)"), "Step 1: go here");
assert.strictEqual(slugify("What is **INP**, really?"), "what-is-inp-really");
console.log("inline ok");
