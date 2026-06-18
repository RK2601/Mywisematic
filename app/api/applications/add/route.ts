export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
import {
  errorResponse,
  readJsonBody,
  saveUploadedFile,
} from "@/lib/api/helpers";
import {
  MAX_DIRECT_UPLOAD_BYTES,
  validateApplicationFile,
} from "@/lib/uploads/application-files";

type ApplicationPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  jobName?: string;
  appliedAt?: string;
  coverLetter?: string;
  cvResume?: string;
};

async function createApplication(payload: ApplicationPayload) {
  const fullName = payload.fullName?.trim() || "";
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const jobName = payload.jobName?.trim() || "";
  const appliedAt = payload.appliedAt || "";
  const coverLetter = payload.coverLetter?.trim() || "";
  const cvResume = payload.cvResume?.trim() || "";

  if (!fullName || !email || !jobName) {
    return errorResponse("Full name, email, and job name are required.");
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
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await readJsonBody<ApplicationPayload>(request);
      return createApplication(body);
    }

    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const jobName = String(formData.get("jobName") || "").trim();
    const appliedAt = String(formData.get("appliedAt") || "");
    const coverLetterField = formData.get("coverLetter");
    const cvResumeFile = formData.get("cvResume");

    const files: File[] = [];
    if (coverLetterField instanceof File && coverLetterField.size > 0) {
      files.push(coverLetterField);
    }
    if (cvResumeFile instanceof File && cvResumeFile.size > 0) {
      files.push(cvResumeFile);
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_DIRECT_UPLOAD_BYTES) {
      return errorResponse(
        "Uploaded files are too large. Please use files under 4 MB each, or try again on the live site.",
        413,
      );
    }

    for (const file of files) {
      const validationError = validateApplicationFile(file);
      if (validationError) {
        return errorResponse(validationError);
      }
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

    return createApplication({
      fullName,
      email,
      phone,
      jobName,
      appliedAt,
      coverLetter,
      cvResume,
    });
  } catch (error) {
    console.error("POST /api/applications/add:", error);
    return errorResponse("Failed to submit application.", 500);
  }
}
