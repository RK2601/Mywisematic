export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Contact } from "@/lib/db/models/Contact";
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
    if (!id) return errorResponse("Contact id is required.");

    await Contact.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/contactus/delete:", error);
    return errorResponse("Failed to delete contact.", 500);
  }
}
