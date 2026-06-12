export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";
import {
  AdminAuthError,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function GET() {
  try {
    requireAdminSession();
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({ jobs });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("GET /api/jobs/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}
