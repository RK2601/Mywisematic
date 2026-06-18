export type ParsedDocument = {
  href: string | null;
  label: string;
  isFile: boolean;
  isText: boolean;
  textContent?: string;
};

export function parseStoredDocument(
  value: string | undefined,
  defaultLabel: string,
): ParsedDocument {
  if (!value?.trim()) {
    return { href: null, label: "-", isFile: false, isText: false };
  }

  if (value.startsWith("data:")) {
    const nameMatch = value.match(/;name=([^;]+);/);
    const label = nameMatch ? decodeURIComponent(nameMatch[1]) : defaultLabel;
    return { href: value, label, isFile: true, isText: false };
  }

  if (value.startsWith("/uploads/")) {
    const label = value.split("/").pop() || defaultLabel;
    return { href: value, label, isFile: true, isText: false };
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    const label = value.split("/").pop() || defaultLabel;
    return { href: value, label, isFile: true, isText: false };
  }

  return {
    href: null,
    label: "Text",
    isFile: false,
    isText: true,
    textContent: value,
  };
}
