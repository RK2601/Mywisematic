import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";
import {
  AdminAuthError,
  errorResponse,
  getQueryId,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function DELETE(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const id = getQueryId(request);
    if (!id) return errorResponse("Job id is required.");

    await Job.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/jobs/delete:", error);
    return errorResponse("Failed to delete job.", 500);
  }
}
