import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/api/helpers";

export async function POST() {
  const response = NextResponse.json({ success: true });
  clearAdminSession(response);
  return response;
}
