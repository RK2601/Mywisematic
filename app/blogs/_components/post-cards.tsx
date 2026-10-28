import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export type PostCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishAt: string;
  minutes: number;
  image: string;
  imageAlt: string;
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric", timeZone: "America/Toronto" });

function Meta({ p }: { p: PostCard }) {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="font-medium uppercase tracking-wider text-[#399AD2]">{p.category}</span>
      <span aria-hidden>·</span>
      <time dateTime={p.publishAt}>{fmt(p.publishAt)}</time>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" aria-hidden />
        {p.minutes} min
      </span>
    </div>
  );
}

export function PostCards({ posts, featured }: { posts: PostCard[]; featured: boolean }) {
  const [first, ...rest] = posts;
  const grid = featured ? rest : posts;
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-2 md:px-6">
      {featured && first && (
        <Link
          href={`/blogs/${first.slug}`}
          className="group grid overflow-hidden rounded-3xl bg-gradient-to-br from-[#399AD2]/40 via-white/10 to-purple-500/30 p-px md:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl md:aspect-auto md:rounded-l-3xl md:rounded-tr-none">
            <Image
              src={first.image}
              alt={first.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-b-3xl bg-background/90 p-8 md:rounded-r-3xl md:rounded-bl-none md:p-10">
            <span className="w-fit rounded-full border border-[#399AD2]/30 bg-[#399AD2]/10 px-3 py-1 text-xs font-medium text-[#7cc0e8]">
              Latest article
            </span>
            <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">{first.title}</h2>
            <p className="text-muted-foreground">{first.description}</p>
            <Meta p={first} />
            <span className="inline-flex items-center text-sm font-medium text-[#399AD2]">
              Read article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </div>
        </Link>
      )}

      {grid.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((p) => (
            <Link
              key={p.slug}
              href={`/blogs/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:-translate-y-1 hover:border-[#399AD2]/40 hover:shadow-[0_20px_60px_-30px_rgba(57,154,210,0.6)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <Meta p={p} />
                <h3 className="font-semibold leading-snug text-foreground group-hover:text-[#7cc0e8]">{p.title}</h3>
                <p className="line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
