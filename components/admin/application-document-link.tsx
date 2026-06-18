import { parseStoredDocument } from "@/lib/uploads/parse-document";

export function ApplicationDocumentLink({
  value,
  fallbackLabel,
}: {
  value?: string;
  fallbackLabel: string;
}) {
  const doc = parseStoredDocument(value, fallbackLabel);

  if (!value?.trim()) {
    return <span className="text-zinc-500">-</span>;
  }

  if (doc.isText && doc.textContent) {
    return (
      <details className="max-w-[220px]">
        <summary className="cursor-pointer text-sm text-[#9E6DD2] hover:underline">
          View text
        </summary>
        <p className="mt-2 max-h-32 overflow-y-auto whitespace-pre-wrap text-xs text-zinc-400">
          {doc.textContent}
        </p>
      </details>
    );
  }

  if (doc.href) {
    return (
      <a
        href={doc.href}
        download={doc.label}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex max-w-[180px] truncate text-sm text-[#9E6DD2] hover:underline"
        title={doc.label}
      >
        {doc.label}
      </a>
    );
  }

  return <span className="text-zinc-500">-</span>;
}
