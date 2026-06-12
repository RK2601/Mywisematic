export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Newsletter } from "@/lib/db/models/Newsletter";
import {
  AdminAuthError,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function GET() {
  try {
    requireAdminSession();
    await connectDB();

    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 }).lean();

    return NextResponse.json({
      subscriberscount: subscribers.length,
      subscribers,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("GET /api/newsletters/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch subscribers" },
      { status: 500 },
    );
  }
}
