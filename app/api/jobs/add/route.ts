export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";
import {
  AdminAuthError,
  errorResponse,
  readJsonBody,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const body = await readJsonBody<Record<string, unknown>>(request);
    const job = await Job.create(body);

    return NextResponse.json({ success: true, job });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("POST /api/jobs/add:", error);
    return errorResponse("Failed to add job.", 500);
  }
}
