export const MAX_APPLICATION_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_DIRECT_UPLOAD_BYTES = 4 * 1024 * 1024;

export const ALLOWED_APPLICATION_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export function validateApplicationFile(file: File): string | null {
  if (file.size > MAX_APPLICATION_FILE_BYTES) {
    return `"${file.name}" is too large. Maximum file size is 10 MB.`;
  }

  if (
    file.type &&
    !ALLOWED_APPLICATION_FILE_TYPES.includes(file.type) &&
    !file.name.match(/\.(pdf|doc|docx|txt)$/i)
  ) {
    return `"${file.name}" must be a PDF, Word document, or text file.`;
  }

  return null;
}

export function shouldUseBlobUpload(files: File[]): boolean {
  if (typeof window === "undefined") return false;

  const onVercel =
    window.location.hostname.includes("vercel.app") ||
    window.location.hostname.endsWith("wisematic.ca");

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const hasLargeFile = files.some(
    (file) => file.size > MAX_DIRECT_UPLOAD_BYTES,
  );

  return onVercel || hasLargeFile || totalSize > MAX_DIRECT_UPLOAD_BYTES;
}
