export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
import { errorResponse } from "@/lib/api/helpers";
import {
  validateApplicationFile,
  validateApplicationFiles,
} from "@/lib/uploads/application-files";
import { storeApplicationUpload } from "@/lib/uploads/store-file";

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

    const files: File[] = [];
    if (coverLetterField instanceof File && coverLetterField.size > 0) {
      files.push(coverLetterField);
    }
    if (cvResumeFile instanceof File && cvResumeFile.size > 0) {
      files.push(cvResumeFile);
    }

    const filesError = validateApplicationFiles(files);
    if (filesError) {
      return errorResponse(filesError, 413);
    }

    for (const file of files) {
      const validationError = validateApplicationFile(file);
      if (validationError) {
        return errorResponse(validationError, 413);
      }
    }

    let coverLetter = "";
    if (coverLetterField instanceof File && coverLetterField.size > 0) {
      coverLetter = await storeApplicationUpload(coverLetterField);
    } else {
      coverLetter = String(coverLetterField || "");
    }

    let cvResume = "";
    if (cvResumeFile instanceof File && cvResumeFile.size > 0) {
      cvResume = await storeApplicationUpload(cvResumeFile);
    }

    if (!coverLetter && !cvResume) {
      return errorResponse("Please provide a cover letter or upload a resume.");
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

    if (error instanceof Error && error.message.includes("MONGODB_URI")) {
      return errorResponse(
        "Application service is temporarily unavailable. Please try again later.",
        503,
      );
    }

    return errorResponse(
      "Failed to submit application. Please check your files are under 4 MB and try again.",
      500,
    );
  }
}
