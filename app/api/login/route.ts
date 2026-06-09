import { NextResponse } from "next/server";
import { baseURL } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username =
      typeof body.username === "string"
        ? body.username.trim()
        : typeof body.email === "string"
          ? body.email.trim()
          : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 },
      );
    }

    const response = await fetch(`${baseURL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            data.error ||
            data.message ||
            "Invalid username or password. Please try again.",
        },
        { status: response.status },
      );
    }

    const headers = new Headers();
    const setCookie = response.headers.get("set-cookie");
    if (setCookie) {
      headers.set("Set-Cookie", setCookie);
    }

    return NextResponse.json(
      {
        success: true,
        redirectUrl: `${baseURL}/dashboard`,
      },
      { headers },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
