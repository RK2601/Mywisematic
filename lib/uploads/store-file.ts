import { saveUploadedFile } from "@/lib/api/helpers";

function toDataUrl(file: File, buffer: Buffer): string {
  const mime = file.type || "application/octet-stream";
  const name = encodeURIComponent(file.name);
  return `data:${mime};name=${name};base64,${buffer.toString("base64")}`;
}

export async function storeApplicationUpload(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());

  if (process.env.VERCEL) {
    return toDataUrl(file, buffer);
  }

  try {
    return await saveUploadedFile(file, "applications");
  } catch (error) {
    console.warn("Local file save failed, storing in database instead:", error);
    return toDataUrl(file, buffer);
  }
}
