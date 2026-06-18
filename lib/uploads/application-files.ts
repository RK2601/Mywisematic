export const MAX_APPLICATION_FILE_BYTES = 4 * 1024 * 1024;
export const MAX_APPLICATION_TOTAL_BYTES = 4 * 1024 * 1024;

export const ALLOWED_APPLICATION_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export function validateApplicationFile(file: File): string | null {
  if (file.size > MAX_APPLICATION_FILE_BYTES) {
    return `"${file.name}" is too large. Each file must be 4 MB or smaller.`;
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

export function validateApplicationFiles(files: File[]): string | null {
  for (const file of files) {
    const error = validateApplicationFile(file);
    if (error) return error;
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_APPLICATION_TOTAL_BYTES) {
    return "Combined file size is too large. Please keep total uploads under 4 MB.";
  }

  return null;
}
