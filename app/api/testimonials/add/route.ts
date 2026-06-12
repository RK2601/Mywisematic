import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Testimonial } from "@/lib/db/models/Testimonial";
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
    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const type = String(formData.get("type") || "client").trim();
    const content = String(formData.get("content") || "").trim();
    const avatarFile = formData.get("avatar");

    if (!name || !content) {
      return errorResponse("Name and content are required.");
    }

    let avatar = "";
    if (avatarFile instanceof File && avatarFile.size > 0) {
      avatar = await saveUploadedFile(avatarFile, "testimonials");
    }

    const testimonial = await Testimonial.create({
      name,
      role,
      type,
      content,
      avatar,
    });

    return NextResponse.json({ success: true, testimonial });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("POST /api/testimonials/add:", error);
    return errorResponse("Failed to add testimonial.", 500);
  }
}
