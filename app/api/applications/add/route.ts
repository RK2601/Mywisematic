export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
import { errorResponse, saveUploadedFile } from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const jobName = String(formData.get("jobName") || "").trim();
    const appliedAt = String(formData.get("appliedAt") || "");
    const coverLetterField = formData.get("coverLetter");
    const cvResumeFile = formData.get("cvResume");

    if (!fullName || !email || !jobName) {
      return errorResponse("Full name, email, and job name are required.");
    }

    let coverLetter = "";
    if (coverLetterField instanceof File && coverLetterField.size > 0) {
      coverLetter = await saveUploadedFile(coverLetterField, "applications");
    } else {
      coverLetter = String(coverLetterField || "");
    }

    let cvResume = "";
    if (cvResumeFile instanceof File && cvResumeFile.size > 0) {
      cvResume = await saveUploadedFile(cvResumeFile, "applications");
    }

    const application = await Application.create({
      fullName,
      email,
      phone,
      jobName,
      appliedAt: appliedAt ? new Date(appliedAt) : new Date(),
      coverLetter,
      cvResume,
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("POST /api/applications/add:", error);
    return errorResponse("Failed to submit application.", 500);
  }
}
