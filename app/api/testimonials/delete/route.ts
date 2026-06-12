import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Testimonial } from "@/lib/db/models/Testimonial";
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
    if (!id) return errorResponse("Testimonial id is required.");

    await Testimonial.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/testimonials/delete:", error);
    return errorResponse("Failed to delete testimonial.", 500);
  }
}
