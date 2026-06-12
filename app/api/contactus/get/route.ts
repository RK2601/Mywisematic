export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Contact } from "@/lib/db/models/Contact";
import {
  AdminAuthError,
  requireAdminSession,
  unauthorizedResponse,
} from "@/lib/api/helpers";

export async function GET() {
  try {
    requireAdminSession();
    await connectDB();

    const contacts = await Contact.find().sort({ contactedAt: -1 }).lean();

    return NextResponse.json({
      contactscount: contacts.length,
      contacts,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return unauthorizedResponse();
    }
    console.error("GET /api/contactus/get:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}
