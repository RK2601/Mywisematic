import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Lightbulb, TriangleAlert } from "lucide-react";
import type { Block } from "@/lib/blog/types";
import { parseInline, slugify } from "@/lib/blog/inline";

export function Rich({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((part, i) => {
        if (part.k === "bold")
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.v}
            </strong>
          );
        if (part.k === "link") {
          return part.href.startsWith("/") ? (
            <Link key={i} href={part.href} className="text-[#399AD2] underline-offset-4 hover:underline">
              {part.v}
            </Link>
          ) : (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#399AD2] underline-offset-4 hover:underline"
            >
              {part.v}
            </a>
          );
        }
        return <span key={i}>{part.v}</span>;
      })}
    </>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-[17px] leading-8 text-zinc-300">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(b.text)}
                className="scroll-mt-28 pt-6 text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-xl font-semibold text-foreground">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i}>
                <Rich text={b.text} />
              </p>
            );
          case "ul":
          case "ol": {
            const List = b.t;
            return (
              <List
                key={i}
                className={`space-y-2 pl-6 marker:text-[#399AD2] ${b.t === "ul" ? "list-disc" : "list-decimal"}`}
              >
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    <Rich text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#399AD2] pl-6 text-2xl italic leading-relaxed text-zinc-200"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                “{b.text}”
                {b.cite && <footer className="mt-2 text-sm not-italic text-muted-foreground">— {b.cite}</footer>}
              </blockquote>
            );
          case "callout": {
            const warn = b.tone === "warn";
            const Icon = warn ? TriangleAlert : Lightbulb;
            return (
              <aside
                key={i}
                className={`flex gap-4 rounded-2xl border p-5 ${
                  warn ? "border-amber-500/30 bg-amber-500/[0.06]" : "border-[#399AD2]/30 bg-[#399AD2]/[0.06]"
                }`}
              >
                <Icon className={`mt-1 h-5 w-5 shrink-0 ${warn ? "text-amber-400" : "text-[#399AD2]"}`} aria-hidden />
                <div>
                  <p className="font-semibold text-foreground">{b.title}</p>
                  <p className="mt-1 text-[16px] leading-7">
                    <Rich text={b.text} />
                  </p>
                </div>
              </aside>
            );
          }
          case "checklist":
            return (
              <section
                key={i}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#399AD2]">Checklist</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{b.title}</p>
                <ul className="mt-4 space-y-3">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[16px] leading-7">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                      <span>
                        <Rich text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[520px] text-left text-[15px] leading-6">
                  <thead className="bg-white/[0.05] text-foreground">
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col" className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-t border-white/5">
                        {row.map((cell, c) => (
                          <td key={c} className={`px-4 py-3 align-top ${c === 0 ? "font-medium text-zinc-200" : ""}`}>
                            <Rich text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "img":
            return (
              <figure key={i} className="py-2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
                  <Image src={b.src} alt={b.alt} fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
                </div>
                {b.caption && <figcaption className="mt-3 text-center text-sm text-muted-foreground">{b.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </div>
  );
}
