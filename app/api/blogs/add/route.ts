export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Blog } from "@/lib/db/models/Blog";
import {
  AdminAuthError,
  errorResponse,
  requireAdminSession,
  saveUploadedFile,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    requireAdminSession();
    await connectDB();

    const formData = await request.formData();
    const title = String(formData.get("title") || "").trim();
    const contentRaw = String(formData.get("content") || "[]");
    const creationDate = String(formData.get("creationDate") || "");
    const thumbnailFile = formData.get("thumbnail");

    if (!title) {
      return errorResponse("Title is required.");
    }

    let content: Array<{ type: string; content: string; id?: string }> = [];
    try {
      content = JSON.parse(contentRaw);
    } catch {
      return errorResponse("Invalid blog content format.");
    }

    let thumbnail = "";
    if (thumbnailFile instanceof File && thumbnailFile.size > 0) {
      thumbnail = await saveUploadedFile(thumbnailFile, "blogs");
    }

    const blog = await Blog.create({
      title,
      content,
      thumbnail,
      creationDate: creationDate ? new Date(creationDate) : new Date(),
    });

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("POST /api/blogs/add:", error);
    return errorResponse("Failed to add blog.", 500);
  }
}
