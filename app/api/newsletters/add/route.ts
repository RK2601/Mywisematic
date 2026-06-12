import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Newsletter } from "@/lib/db/models/Newsletter";
import { errorResponse, readJsonBody } from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await readJsonBody<{ email?: string }>(request);
    const email = body.email?.trim().toLowerCase() || "";

    if (!email) {
      return errorResponse("Email is required.");
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
