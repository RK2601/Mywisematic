export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Newsletter } from "@/lib/db/models/Newsletter";
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
    if (!id) return errorResponse("Subscriber id is required.");

    await Newsletter.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/newsletters/delete:", error);
    return errorResponse("Failed to delete subscriber.", 500);
  }
}
