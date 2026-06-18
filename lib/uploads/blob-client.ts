"use client";

import { upload } from "@vercel/blob/client";

export async function uploadApplicationFile(file: File): Promise<string> {
  const pathname = `applications/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const blob = await upload(pathname, file, {
    access: "public",
    handleUploadUrl: "/api/applications/upload",
  });

  return blob.url;
}
