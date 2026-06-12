export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Testimonial } from "@/lib/db/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      message: "Testimonial fetched successfully",
      testimonials,
    });
  } catch (error) {
    console.error("GET /api/testimonials/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch testimonials" },
      { status: 500 },
    );
  }
}
