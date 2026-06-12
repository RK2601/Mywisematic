import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import { Contact } from "@/lib/db/models/Contact";
import { errorResponse, readJsonBody } from "@/lib/api/helpers";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await readJsonBody<{
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    }>(request);

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return errorResponse("Name, email, and message are required.");
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      contactedAt: new Date(),
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error("POST /api/contactus/add:", error);
    return errorResponse("Failed to submit contact form.", 500);
  }
}
