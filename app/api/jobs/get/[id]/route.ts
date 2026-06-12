export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";
import {
  AdminAuthError,
  errorResponse,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  try {
    requireAdminSession();
    await connectDB();

    const job = await Job.findById(params.id).lean();
    if (!job) return errorResponse("Job not found.", 404);

    return NextResponse.json({ job });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("GET /api/jobs/get/[id]:", error);
    return errorResponse("Failed to fetch job.", 500);
  }
}
