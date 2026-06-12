import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Application } from "@/lib/db/models/Application";
import {
  AdminAuthError,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function GET() {
  try {
    requireAdminSession();
    await connectDB();

    const applications = await Application.find().sort({ appliedAt: -1 }).lean();

    return NextResponse.json({
      applicationCount: applications.length,
      applications,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("GET /api/applications/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications" },
      { status: 500 },
    );
  }
}
