import { saveUploadedFile } from "@/lib/api/helpers";

function toDataUrl(file: File, buffer: Buffer): string {
  // Derive the type from the extension so an uploaded "resume" can't be served as HTML/SVG.
  const ext = file.name.split(".").pop()?.toLowerCase() || "";
  const mime =
    {
      pdf: "application/pdf",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      txt: "text/plain",
    }[ext] || "application/octet-stream";
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
