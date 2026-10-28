export const dynamic = "force-dynamic";

import bcrypt from "bcryptjs";
import { timingSafeEqual } from "crypto";
import { clientIp, isRateLimited, tooManyRequests } from "@/lib/api/rate-limit";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { User } from "@/lib/db/models/User";
import { errorResponse } from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    await connectDB();

    if (await isRateLimited(`setup:${clientIp(request)}`, 5, 3600)) {
      return tooManyRequests(3600);
    }

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
      const a = Buffer.from(setupKey);
      const b = Buffer.from(expectedKey || "");
      if (!expectedKey || a.length !== b.length || !timingSafeEqual(a, b)) {
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

// Deliberately reveals nothing about existing admin accounts.
export async function GET() {
  return NextResponse.json({ message: "POST { username, password, setupKey } to create an admin." });
}
