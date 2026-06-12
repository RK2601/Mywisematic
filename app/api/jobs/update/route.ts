import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";
import {
  AdminAuthError,
  errorResponse,
  getQueryId,
  readJsonBody,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function PUT(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const id = getQueryId(request);
    if (!id) return errorResponse("Job id is required.");

    const body = await readJsonBody<Record<string, unknown>>(request);
    delete body._id;
    delete body.__v;
    delete body.createdAt;
    delete body.updatedAt;
    const job = await Job.findByIdAndUpdate(id, body, { new: true });

    if (!job) return errorResponse("Job not found.", 404);

    return NextResponse.json({ success: true, job });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("PUT /api/jobs/update:", error);
    return errorResponse("Failed to update job.", 500);
  }
}
