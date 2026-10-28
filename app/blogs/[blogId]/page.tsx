import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import {
  SITE_URL,
  allPostsForChecks,
  getPublishedPost,
  publishedPosts,
  readingMinutes,
} from "@/lib/blog";
import { unsplash } from "@/lib/blog/types";
import { plain, slugify } from "@/lib/blog/inline";
import { PostBody, Rich } from "@/app/blogs/_components/post-body";
import LegacyPost from "@/app/blogs/_components/legacy-post";

// Posts publish on their date; re-check at most every 10 minutes.
export const revalidate = 600;

type Props = { params: { blogId: string } };

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  });

export function generateMetadata({ params }: Props): Metadata {
  const post = getPublishedPost(params.blogId);
  if (!post) return { title: "Blog" };
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const image = unsplash(post.hero.src, 1200);
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    authors: [{ name: "WiseMatic Editorial Team" }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "WiseMatic",
      publishedTime: post.publishAt,
      section: post.category,
      tags: post.keywords,
      images: [{ url: image, width: 1200, alt: post.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPublishedPost(params.blogId);
  // Not one of the scheduled posts: fall back to posts created in the admin panel (MongoDB ids).
  if (!post) {
    // A scheduled post before its date stays hidden.
    if (allPostsForChecks().some((p) => p.slug === params.blogId)) notFound();
    return <LegacyPost />;
  }

  const url = `${SITE_URL}/blogs/${post.slug}`;
  const minutes = readingMinutes(post);
  const toc = post.body
    .filter((b) => b.t === "h2")
    .map((b) => ("text" in b ? b.text : ""));
  const related = publishedPosts()
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category),
    )
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: unsplash(post.hero.src, 1200),
      datePublished: post.publishAt,
      dateModified: post.publishAt,
      author: { "@type": "Organization", name: "WiseMatic", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "WiseMatic",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
      },
      mainEntityOfPage: url,
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      citation: post.references.map((r) => r.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blogs`,
        },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    },
  ];

  return (
    <main className="relative overflow-x-clip pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[#399AD2]/10 blur-3xl" />

      <article className="relative mx-auto max-w-6xl px-4 pt-28 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto mb-8 max-w-3xl text-sm text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <li>
              <Link href="/blogs" className="hover:text-foreground">
                Blog
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <li className="text-zinc-400">{post.category}</li>
          </ol>
        </nav>

        <header className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#399AD2]/30 bg-[#399AD2]/10 px-3 py-1 text-sm text-[#7cc0e8]">
            {post.category}
          </span>
          <h1 className="mt-5 bg-gradient-to-r from-foreground to-zinc-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-zinc-300">
              By the WiseMatic Editorial Team
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden />
              <time dateTime={post.publishAt}>{fmt(post.publishAt)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {minutes} min read
            </span>
          </div>
        </header>

        <figure className="mx-auto mt-10 max-w-5xl">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_-30px_rgba(57,154,210,0.6)]">
            <Image
              src={unsplash(post.hero.src, 2000)}
              alt={post.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[1fr_minmax(0,720px)_1fr]">
          <aside className="hidden lg:block" aria-label="On this page">
            <div className="sticky top-28 text-sm">
              <p className="mb-3 font-semibold text-zinc-300">On this page</p>
              <ul className="space-y-2 border-l border-white/10">
                {toc.map((t) => (
                  <li key={t}>
                    <a
                      href={`#${slugify(t)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-muted-foreground hover:border-[#399AD2] hover:text-foreground"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0">
            <section className="mb-10 rounded-3xl bg-gradient-to-br from-[#399AD2]/40 via-white/10 to-purple-500/30 p-px">
              <div className="rounded-3xl bg-background/90 p-6 sm:p-8">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#399AD2]">
                  <Sparkles className="h-4 w-4" aria-hidden /> Key takeaways
                </p>
                <ul className="mt-4 space-y-3 text-[16px] leading-7 text-zinc-300">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#399AD2]" />
                      <span>
                        <Rich text={t} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <PostBody blocks={post.body} />

            <section className="mt-16" aria-labelledby="faq">
              <h2
                id="faq"
                className="text-2xl font-semibold text-foreground sm:text-3xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
                {post.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group p-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                      {f.q}
                      <ChevronRight
                        className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
                        aria-hidden
                      />
                    </summary>
                    <p className="mt-3 leading-7 text-zinc-400">
                      <Rich text={f.a} />
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14" aria-labelledby="references">
              <h2
                id="references"
                className="text-xl font-semibold text-foreground"
              >
                Sources and further reading
              </h2>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-zinc-400 marker:text-zinc-500">
                {post.references.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 underline-offset-4 hover:text-[#399AD2] hover:underline"
                    >
                      {r.title}
                    </a>{" "}
                    <span>— {r.publisher}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#399AD2]/50 via-white/10 to-purple-500/40 p-px">
              <div className="relative rounded-3xl bg-background/90 p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
                <p className="text-sm font-semibold uppercase tracking-widest text-[#399AD2]">
                  Work with WiseMatic
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  Want help putting this into practice?
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Our {post.service.label} team turns ideas like these into
                  working solutions. Tell us what you&#39;re planning and
                  we&#39;ll suggest a practical first step.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="group inline-flex h-11 items-center rounded-xl bg-gradient-to-r from-[#399AD2] to-purple-500 px-5 font-medium text-white shadow-lg shadow-[#399AD2]/20 hover:opacity-90"
                  >
                    Talk to our team
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                  <Link
                    href={post.service.href}
                    className="inline-flex h-11 items-center rounded-xl border border-white/15 px-5 font-medium text-zinc-200 hover:border-white/30"
                  >
                    Explore {post.service.label}
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden lg:block" />
        </div>
      </article>

      {related.length > 0 && (
        <section
          className="mx-auto mt-24 max-w-6xl px-4 sm:px-6"
          aria-labelledby="related"
        >
          <h2 id="related" className="text-2xl font-semibold text-foreground">
            Keep reading
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blogs/${r.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#399AD2]/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={unsplash(r.hero.src, 800)}
                    alt={r.hero.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#399AD2]">
                    {r.category}
                  </p>
                  <p className="mt-2 font-semibold leading-snug text-foreground">
                    {r.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
