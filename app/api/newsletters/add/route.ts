export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Newsletter } from "@/lib/db/models/Newsletter";
import { errorResponse, readJsonBody } from "@/lib/api/helpers";
import { isSpam } from "@/lib/spam";
import { clientIp, isRateLimited, tooManyRequests } from "@/lib/api/rate-limit";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await readJsonBody<{ email?: string; website?: string }>(request);
    const email = body.email?.trim().toLowerCase() || "";

    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return errorResponse("A valid email is required.");
    }
    if (await isRateLimited(`newsletter:${clientIp(request)}`, 10, 3600)) {
      return tooManyRequests(3600);
    }

    // Pretend success so bots don't learn they were blocked.
    if (isSpam({ email, website: body.website })) {
      return NextResponse.json({ success: true });
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return errorResponse("This email is already subscribed.");
    }

    const subscriber = await Newsletter.create({
      email,
      subscribedAt: new Date(),
    });

    return NextResponse.json({ success: true, subscriber });
  } catch (error) {
    console.error("POST /api/newsletters/add:", error);
    return errorResponse("Failed to subscribe.", 500);
  }
}
