export const dynamic = "force-dynamic";

import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import {
  ALLOWED_APPLICATION_FILE_TYPES,
  MAX_APPLICATION_FILE_BYTES,
} from "@/lib/uploads/application-files";

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          "File uploads are not configured. Add a Vercel Blob store to this project.",
      },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as HandleUploadBody;
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ALLOWED_APPLICATION_FILE_TYPES,
        maximumSizeInBytes: MAX_APPLICATION_FILE_BYTES,
        addRandomSuffix: true,
      }),
      onUploadCompleted: async () => {
        // Application metadata is saved in /api/applications/add.
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("POST /api/applications/upload:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to upload file.",
      },
      { status: 400 },
    );
  }
}
