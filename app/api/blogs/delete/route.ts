import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Blog } from "@/lib/db/models/Blog";
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
    if (!id) return errorResponse("Blog id is required.");

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("DELETE /api/blogs/delete:", error);
    return errorResponse("Failed to delete blog.", 500);
  }
}
