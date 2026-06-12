import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { User } from "@/lib/db/models/User";
import { errorResponse } from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = (await request.json()) as {
      username?: string;
      password?: string;
      setupKey?: string;
    };

    const username = body.username?.trim().toLowerCase() || "";
    const password = body.password || "";
    const setupKey = body.setupKey || "";

    const expectedKey = process.env.SETUP_SECRET;
    const userCount = await User.countDocuments();

    if (userCount > 0) {
      if (!expectedKey || setupKey !== expectedKey) {
        return errorResponse("Setup is locked. Provide a valid setupKey.", 403);
      }
    }

    if (!username || password.length < 6) {
      return errorResponse("Username and password (min 6 chars) are required.");
    }

    const existing = await User.findOne({ username });
    if (existing) {
      return errorResponse("Admin user already exists.", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({ username, password: hashedPassword });

    return NextResponse.json({
      success: true,
      message: "Admin user created. You can now log in at /admin/login.",
      username,
    });
  } catch (error) {
    console.error("POST /api/setup:", error);
    return errorResponse("Failed to create admin user.", 500);
  }
}

export async function GET() {
  try {
    await connectDB();
    const userCount = await User.countDocuments();
    return NextResponse.json({
      configured: userCount > 0,
      userCount,
      message:
        userCount > 0
          ? "Admin user exists. POST to this endpoint with setupKey to add another."
          : "No admin user yet. POST { username, password } to create the first admin.",
    });
  } catch (error) {
    console.error("GET /api/setup:", error);
    return errorResponse("Database is not connected.", 500);
  }
}
