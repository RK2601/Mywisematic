import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";

export async function GET() {
  try {
    await connectDB();
    const now = new Date();
    const jobs = await Job.find({
      isActive: true,
      validFrom: { $lte: now },
      validTill: { $gte: now },
    })
      .sort({ validFrom: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      message: "Active jobs fetched successfully",
      jobCount: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("GET /api/jobs/getactive:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch active jobs" },
      { status: 500 },
    );
  }
}
