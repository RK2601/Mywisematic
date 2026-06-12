import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Testimonial } from "@/lib/db/models/Testimonial";
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
    if (!id) return errorResponse("Testimonial id is required.");

    const formData = await request.formData();
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) return errorResponse("Testimonial not found.", 404);

    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const type = String(formData.get("type") || "").trim();
    const content = String(formData.get("content") || "").trim();
    const avatarFile = formData.get("avatar");

    if (name) testimonial.name = name;
    if (role) testimonial.role = role;
    if (type) testimonial.type = type;
    if (content) testimonial.content = content;

    if (avatarFile instanceof File && avatarFile.size > 0) {
      testimonial.avatar = await saveUploadedFile(avatarFile, "testimonials");
    }

    await testimonial.save();

    return NextResponse.json({ success: true, testimonial });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("PUT /api/testimonials/update:", error);
    return errorResponse("Failed to update testimonial.", 500);
  }
}
