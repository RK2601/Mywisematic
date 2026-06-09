import { NextResponse } from "next/server";
import { getChatResponse } from "@/lib/chat-agent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const query = typeof body.query === "string" ? body.query : "";

    const result = getChatResponse(query);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      {
        response:
          "Sorry, something went wrong on my end. Please try again or contact us at info@wisematic.ca.",
        actions: [
          {
            label: "Contact Us",
            type: "link",
            value: "/contact-us",
          },
        ],
      },
      { status: 500 },
    );
  }
}
