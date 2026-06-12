export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
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
    if (!id) return errorResponse("Application id is required.");

    await Application.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/applications/delete:", error);
    return errorResponse("Failed to delete application.", 500);
  }
}
