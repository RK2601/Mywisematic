export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Blog } from "@/lib/db/models/Blog";
import {
  AdminAuthError,
  errorResponse,
  getQueryId,
  requireAdminSession,
  saveUploadedFile,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function PUT(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const id = getQueryId(request);
    if (!id) return errorResponse("Blog id is required.");

    const formData = await request.formData();
    const title = String(formData.get("title") || "").trim();
    const contentRaw = String(formData.get("content") || "[]");
    const creationDate = String(formData.get("creationDate") || "");
    const thumbnailFile = formData.get("thumbnail");

    const blog = await Blog.findById(id);
    if (!blog) return errorResponse("Blog not found.", 404);

    if (title) blog.title = title;

    try {
      blog.content = JSON.parse(contentRaw);
    } catch {
      return errorResponse("Invalid blog content format.");
    }

    if (creationDate) blog.creationDate = new Date(creationDate);

    if (thumbnailFile instanceof File && thumbnailFile.size > 0) {
      blog.thumbnail = await saveUploadedFile(thumbnailFile, "blogs");
    }

    await blog.save();

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("PUT /api/blogs/update:", error);
    return errorResponse("Failed to update blog.", 500);
  }
}
