// Bot patterns seen in real submissions (Aug–Oct 2026).

// Gmail ignores dots, so bots dot-stuff addresses (r.obi.n.son.step@gmail.com) to look unique.
export function isDotStuffedEmail(email: string): boolean {
  const [local, domain] = email.toLowerCase().split("@");
  if (!local || !domain || !["gmail.com", "googlemail.com"].includes(domain)) return false;
  return (local.match(/\./g) || []).length >= 3;
}

// Domains that only ever sent spam. Add more here as they show up.
const BLOCKED_DOMAINS = ["northmail.web.id"];

export function isBlockedDomain(email: string): boolean {
  const domain = email.toLowerCase().split("@")[1] || "";
  return BLOCKED_DOMAINS.some((d) => domain === d || domain.endsWith("." + d));
}

// A single random token like "yjEqWhFPqxmitPPVC": no spaces, long, mixed case.
export function isGibberish(text: string): boolean {
  const t = text.trim();
  return !/\s/.test(t) && t.length >= 10 && /[a-z]/.test(t) && /[A-Z].*[A-Z]/.test(t);
}

// `website` is a hidden honeypot field; humans never see it, bots fill it.
export function isSpam(f: { email?: string; message?: string; website?: string }): boolean {
  return !!f.website || isBlockedDomain(f.email || "") || isDotStuffedEmail(f.email || "") || (f.message !== undefined && isGibberish(f.message));
}
