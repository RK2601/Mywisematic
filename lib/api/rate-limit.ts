import { Schema, models, model } from "mongoose";

// Fixed-window counters in MongoDB, so limits hold across serverless instances.
const RateLimitSchema = new Schema({
  key: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
  expiresAt: { type: Date, required: true, index: { expires: 0 } },
});

const RateLimit = models.RateLimit || model("RateLimit", RateLimitSchema);

export function clientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}

/** Counts one hit for `key`; returns true when the caller is over `limit` within `windowSec`. Call after connectDB(). */
export async function isRateLimited(
  key: string,
  limit: number,
  windowSec: number,
): Promise<boolean> {
  const now = new Date();
  // Drop an expired window first (the TTL monitor only runs about once a minute).
  await RateLimit.deleteOne({ key, expiresAt: { $lte: now } });
  const doc = await RateLimit.findOneAndUpdate(
    { key },
    {
      $inc: { count: 1 },
      $setOnInsert: { expiresAt: new Date(now.getTime() + windowSec * 1000) },
    },
    { upsert: true, returnDocument: "after" },
  );
  return doc.count > limit;
}

export async function clearRateLimit(key: string): Promise<void> {
  await RateLimit.deleteOne({ key });
}

export function tooManyRequests(retryAfterSec: number) {
  return new Response(
    JSON.stringify({
      success: false,
      error: "Too many attempts. Please try again later.",
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfterSec),
      },
    },
  );
}
