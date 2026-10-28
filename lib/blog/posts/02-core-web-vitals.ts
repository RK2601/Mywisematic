import { Post, h2, h3, p, ul, ol, tip, warn, checklist, table, img } from "../types";

const post: Post = {
  slug: "core-web-vitals-site-speed-seo",
  title: "Core Web Vitals Explained: How Site Speed Affects Rankings and Sales",
  description:
    "LCP, INP and CLS in plain English: what Google measures, the thresholds you need to hit, and a step-by-step plan to make your website faster.",
  publishAt: "2026-10-30T13:00:00Z",
  category: "Digital Marketing & SEO",
  keywords: [
    "Core Web Vitals",
    "website speed SEO",
    "LCP INP CLS",
    "improve page speed",
    "page experience Google",
  ],
  hero: { src: "1460925895917-afdab827c52f", alt: "Laptop showing a website analytics dashboard with charts" },
  service: { label: "Digital Marketing & SEO", href: "/services/digital-marketing" },
  takeaways: [
    "Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS). Aim for LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1.",
    "Google uses Core Web Vitals as part of its page experience signals, but helpful content still matters more. Speed is the tie-breaker and the conversion booster.",
    "Real-user (field) data is what counts. Lab tools like Lighthouse help you debug, but judge success with field data in Search Console and PageSpeed Insights.",
    "The biggest wins usually come from optimised images, less JavaScript and reserving space for content that loads late.",
  ],
  body: [
    p(
      "A slow website quietly costs you money. Visitors leave before your page appears, forms feel sluggish, and buttons jump just as someone tries to tap them. Google turned these frustrations into three measurable signals called **Core Web Vitals**. This guide explains what they mean and how to improve them, without the jargon.",
    ),
    h2("Why speed matters for your business"),
    p(
      "Usability research has been consistent for decades. The Nielsen Norman Group describes [three response-time limits](https://www.nngroup.com/articles/website-response-times/): about 0.1 seconds feels instant, about 1 second keeps a person's flow of thought, and around 10 seconds is the limit for keeping attention at all. Every extra delay pushes visitors closer to the back button.",
    ),
    p(
      "Google's mobile research found that as page load time goes from one second to three seconds, [the probability of a bounce increases by 32%](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/). On a site that relies on enquiries or sales, that is revenue walking away.",
    ),
    h2("The three Core Web Vitals, in plain English"),
    table(
      ["Metric", "What it measures", "Good", "Needs improvement", "Poor"],
      ["LCP: Largest Contentful Paint", "How quickly the main content appears", "≤ 2.5 s", "2.5–4.0 s", "> 4.0 s"],
      ["INP: Interaction to Next Paint", "How quickly the page responds when you click or type", "≤ 200 ms", "200–500 ms", "> 500 ms"],
      ["CLS: Cumulative Layout Shift", "How much the layout jumps while loading", "≤ 0.1", "0.1–0.25", "> 0.25"],
    ),
    p(
      "These thresholds come from Google's [web.dev guidance](https://web.dev/articles/vitals). A page passes when at least 75% of real visits meet the \"good\" threshold for each metric. Note that **INP replaced the older First Input Delay (FID) metric in March 2024**, so articles that still talk about FID are out of date.",
    ),
    h2("Do Core Web Vitals affect Google rankings?"),
    p(
      "Yes, with nuance. Google's [Search documentation](https://developers.google.com/search/docs/appearance/core-web-vitals) says Core Web Vitals are used by its ranking systems as part of the broader [page experience](https://developers.google.com/search/docs/appearance/page-experience) picture, and it is equally clear that relevant, helpful content comes first. Think of speed as a tie-breaker between similar pages and a powerful conversion booster once people arrive.",
    ),
    tip(
      "The practical view",
      "Don't chase a perfect 100 Lighthouse score. Aim to pass all three Core Web Vitals for real users on your most important pages: home, services, pricing and contact.",
    ),
    h2("How to measure your site today"),
    ol(
      "Open [PageSpeed Insights](https://pagespeed.web.dev/) and test your top pages. Look first at the **field data** section (real Chrome users), then at the lab diagnostics.",
      "In Google Search Console, open the Core Web Vitals report to see which groups of URLs pass or fail on mobile and desktop.",
      "Write down the current LCP, INP and CLS for each key page. That is your baseline.",
    ),
    img(
      "1517694712202-14dd9538aa97",
      "Laptop on a white desk showing source code",
      "Most speed fixes happen in the code and in how images and scripts are delivered.",
    ),
    h2("How to improve each metric"),
    h3("Faster LCP (loading)"),
    ul(
      "Serve images in modern formats (WebP or AVIF) and at the size they are displayed.",
      "Don't lazy-load the main hero image; preload it so the browser fetches it early.",
      "Use a CDN and caching so pages are served from close to your visitors.",
      "Reduce render-blocking CSS and fonts; load only what the first screen needs.",
    ),
    h3("Faster INP (responsiveness)"),
    ul(
      "Ship less JavaScript. Audit third-party scripts such as chat widgets, trackers and testing tools; each one competes for the browser's main thread.",
      "Break long tasks into smaller chunks so the browser can respond to taps between them.",
      "Avoid heavy work inside click and input handlers; show feedback first, then process.",
    ),
    h3("Lower CLS (visual stability)"),
    ul(
      "Always set width and height (or an aspect ratio) on images, videos and embeds.",
      "Reserve space for banners, ads and cookie notices instead of pushing content down.",
      "Use font-display settings and well-matched fallback fonts so text doesn't jump when web fonts load.",
    ),
    warn(
      "Watch your plugins and tags",
      "On many business sites, the biggest slowdown is not the site itself but the pile of marketing tags added over the years. Review them every quarter and remove what nobody uses.",
    ),
    h2("A 30-day speed plan"),
    checklist(
      "Speed sprint checklist",
      "Week 1: Record baseline field data for your top five pages",
      "Week 1: List every third-party script and who owns it",
      "Week 2: Compress and resize images; preload the hero image",
      "Week 2: Remove or defer unused scripts and tags",
      "Week 3: Fix layout shifts by sizing media and reserving space",
      "Week 4: Re-test, then monitor monthly in Search Console",
    ),
    h2("The bottom line"),
    p(
      "Core Web Vitals turn \"the website feels slow\" into numbers you can fix. Improve loading, responsiveness and stability on your money pages and you will usually see benefits in both search visibility and conversions. Our [digital marketing and SEO team](/services/digital-marketing) can audit your site and prioritise the fixes with the biggest impact.",
    ),
  ],
  faq: [
    {
      q: "What is a good Core Web Vitals score?",
      a: "Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, for at least 75% of real visits.",
    },
    {
      q: "Is INP the same as FID?",
      a: "No. Interaction to Next Paint replaced First Input Delay as a Core Web Vital in March 2024. INP looks at the responsiveness of interactions throughout the visit, not just the first one.",
    },
    {
      q: "Why does PageSpeed Insights show different numbers each time?",
      a: "Lab tests vary with network and server conditions. Field data from real users is more stable and is what Google uses, so base decisions on field data when it is available.",
    },
    {
      q: "Will a faster website guarantee higher rankings?",
      a: "No. Relevance and helpful content come first. Speed helps you compete with similar pages and improves conversions once visitors arrive.",
    },
  ],
  references: [
    { title: "Web Vitals", publisher: "web.dev (Google)", url: "https://web.dev/articles/vitals" },
    {
      title: "Understanding Core Web Vitals and Google search results",
      publisher: "Google Search Central",
      url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      title: "Understanding page experience in Google Search results",
      publisher: "Google Search Central",
      url: "https://developers.google.com/search/docs/appearance/page-experience",
    },
    {
      title: "Find out how you stack up to new industry benchmarks for mobile page speed",
      publisher: "Think with Google",
      url: "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/",
    },
    {
      title: "Response Times: The 3 Important Limits",
      publisher: "Nielsen Norman Group",
      url: "https://www.nngroup.com/articles/website-response-times/",
    },
  ],
};

export default post;
