export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
import {
  AdminAuthError,
  errorResponse,
  getQueryId,
  readJsonBody,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

const STATUSES = ["new", "reviewing", "shortlisted", "rejected", "hired"];

export async function PATCH(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const id = getQueryId(request);
    if (!id) return errorResponse("Application id is required.");

    const body = await readJsonBody<{ status?: string; notes?: string }>(request);
    const update: { status?: string; notes?: string } = {};
    if (body.status !== undefined) {
      if (!STATUSES.includes(body.status)) return errorResponse("Invalid status.");
      update.status = body.status;
    }
    if (body.notes !== undefined) update.notes = String(body.notes).slice(0, 5000);

    const application = await Application.findByIdAndUpdate(id, update, { new: true });
    if (!application) return errorResponse("Application not found.", 404);

    return NextResponse.json({ success: true, application });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("PATCH /api/applications/update:", error);
    return errorResponse("Failed to update application.", 500);
  }
}
