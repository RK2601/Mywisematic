import bcrypt from "bcryptjs";
import { clientIp, clearRateLimit, isRateLimited, tooManyRequests } from "@/lib/api/rate-limit";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { User } from "@/lib/db/models/User";
import {
  applyAdminSessionToResponse,
  errorResponse,
} from "@/lib/api/helpers";

type LoginBody = {
  username?: string;
  email?: string;
  password?: string;
};

export async function handleLogin(request: Request) {
  try {
    await connectDB();

    const body = (await request.json()) as LoginBody;
    const username =
      typeof body.username === "string"
        ? body.username.trim()
        : typeof body.email === "string"
          ? body.email.trim()
          : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return errorResponse("Username and password are required.", 400);
    }

    // Brute-force protection: 20 failed tries per IP and 5 per account every 15 minutes.
    const ipKey = `login-ip:${clientIp(request)}`;
    const userKey = `login-user:${username.toLowerCase()}`;
    if ((await isRateLimited(ipKey, 20, 900)) || (await isRateLimited(userKey, 5, 900))) {
      return tooManyRequests(900);
    }

    const user = await User.findOne({
      username: username.toLowerCase(),
    }).lean();

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return errorResponse("Invalid username or password.", 401);
    }

    await clearRateLimit(userKey);

    const response = NextResponse.json({
      success: true,
      redirectUrl: "/admin/dashboard",
    });

    applyAdminSessionToResponse(response, {
      userId: String(user._id),
      username: user.username,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return errorResponse("Something went wrong. Please try again later.", 500);
  }
}
