// Run: node --experimental-strip-types lib/spam.test.mjs
import assert from "node:assert";
const { isSpam } = await import("./spam.ts");
assert(isSpam({ email: "r.obi.n.son.step.han.ie.vj.ix.kx@gmail.com" }));
assert(isSpam({ email: "fus.ok.i.x.op.o06@gmail.com" }));
assert(isSpam({ email: "ok@x.com", message: "yjEqWhFPqxmitPPVC" }));
assert(isSpam({ email: "ok@x.com", website: "http://x" }));
assert(!isSpam({ email: "jane.doe@gmail.com", message: "Hi, I'd like a quote." }));
assert(!isSpam({ email: "a.b.c.d@company.ca", message: "Hello" }));
assert(!isSpam({ email: "x@y.com", message: "Thanks!" }));
assert(isSpam({ email: "paul.allard9619@northmail.web.id", message: "Putting generative AI to work" }));
assert(!isSpam({ email: "jackson.pan@seedagent.ai", message: "Hi your team" }));
console.log("spam checks ok");
