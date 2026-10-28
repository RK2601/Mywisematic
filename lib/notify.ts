// Emails the site owner about new submissions via Resend (https://resend.com).
// Needs RESEND_API_KEY and NOTIFY_EMAIL in Vercel; without them it does nothing.
// shortcut: sends from onboarding@resend.dev, which only delivers to the Resend account's own email;
// verify wisematic.ca in Resend and set NOTIFY_FROM to send from your domain / to anyone.

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function notifyOwner(
  subject: string,
  fields: Record<string, string>,
  replyTo?: string,
): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;

  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#666;vertical-align:top">${escape(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || "WiseMatic Website <onboarding@resend.dev>",
        to: to.split(",").map((e) => e.trim()),
        reply_to: replyTo,
        subject,
        html: `<h2 style="font-family:sans-serif">${escape(subject)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table><p style="font-family:sans-serif;font-size:12px;color:#999">See all submissions at https://www.wisematic.ca/admin</p>`,
      }),
    });
    if (!res.ok) console.error("notifyOwner failed:", res.status, await res.text());
  } catch (error) {
    // Never let a failed email lose the submission itself.
    console.error("notifyOwner error:", error);
  }
}
