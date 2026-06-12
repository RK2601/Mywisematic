import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Blog } from "@/lib/db/models/Blog";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ creationDate: -1 }).lean();

    return NextResponse.json({
      success: true,
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    console.error("GET /api/blogs/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}
