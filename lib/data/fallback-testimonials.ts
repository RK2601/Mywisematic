export interface FallbackTestimonial {
  name: string;
  role: string;
  type: string;
  avatar: string;
  content: string;
}

/**
 * Shown only when the CMS-backed testimonials API returns none for a given
 * page/type, so every page always has a themed testimonials section.
 */
export const fallbackTestimonials: FallbackTestimonial[] = [
  // landing page
  {
    name: "Marcus Webb",
    role: "COO, Northline Logistics",
    type: "landing page",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "WiseMatic rebuilt our dispatch platform in under three months and cut our manual scheduling time by more than half. Their team actually understood our operations before writing a single line of code.",
  },
  {
    name: "Priya Nandakumar",
    role: "Founder, Loopwell Health",
    type: "landing page",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "We came in with a rough idea and left with a production-ready product. What stood out was how honestly they pushed back on features that would have slowed our launch.",
  },
  {
    name: "Daniel Osei",
    role: "VP Engineering, Fintra",
    type: "landing page",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    content:
      "We've worked with three other agencies before WiseMatic. None of them shipped this fast without cutting corners on code quality. Our engineers actually enjoy maintaining what they built.",
  },
  {
    name: "Elena Marchetti",
    role: "Director of Analytics, Brightfield Retail",
    type: "landing page",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    content:
      "WiseMatic built us a dashboard our regional managers check every morning now, not just something for quarterly reviews. It paid for itself within the first quarter.",
  },

  // saas
  {
    name: "Claire Bennington",
    role: "Head of Product, Ledgerly",
    type: "saas",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    content:
      "Our churn dropped noticeably after WiseMatic rebuilt our onboarding flow. They treated it like a conversion problem, not just a design refresh, and the data backs that up.",
  },
  {
    name: "Ravi Chandrasekaran",
    role: "CTO, Stackline",
    type: "saas",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    content:
      "We needed to move off a monolith without breaking our billing system. WiseMatic planned the migration in stages so we never had a single hour of downtime for customers.",
  },
  {
    name: "Hannah Fischer",
    role: "Founder, Rosterly",
    type: "saas",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "They shipped our multi-tenant architecture faster than our own roadmap projected, and it's held up under real customer load without the scaling issues we braced for.",
  },

  // it
  {
    name: "Gregory Alvarez",
    role: "IT Director, Meridian Health Group",
    type: "it",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    content:
      "WiseMatic modernized our internal systems without disrupting daily operations across five clinics. Their rollout plan accounted for staff who barely wanted to touch a new login screen.",
  },
  {
    name: "Susan Whitfield",
    role: "Operations Manager, Calder Manufacturing",
    type: "it",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "Our old vendor left our network documentation a mess. WiseMatic cleaned it up, tightened our security posture, and actually explained every change in plain language.",
  },
  {
    name: "Tomasz Adamczyk",
    role: "Infrastructure Lead, Vantage Freight",
    type: "it",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    content:
      "They handled our cloud migration over a single weekend with zero unplanned downtime. Support since then has been just as responsive, not the usual post-launch silence.",
  },

  // data analytics
  {
    name: "Elena Marchetti",
    role: "Director of Analytics, Brightfield Retail",
    type: "data analytics",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    content:
      "We were sitting on years of sales data with no way to use it. WiseMatic built us a dashboard that our regional managers check every morning now, not just something for quarterly reviews.",
  },
  {
    name: "Nathaniel Cross",
    role: "Head of Strategy, Corvid Insurance",
    type: "data analytics",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    content:
      "Their pipeline caught a data quality issue our old vendor missed for two years. That alone paid for the engagement, and the reporting layer they built is genuinely a joy to use.",
  },
  {
    name: "Michelle Ouyang",
    role: "VP Data, Fairway Commerce",
    type: "data analytics",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    content:
      "WiseMatic turned three disconnected spreadsheets into a single source of truth for our leadership team. Forecast accuracy has visibly improved since we started using it.",
  },

  // ai & ml
  {
    name: "Jordan Petrakis",
    role: "Founder, Fielda AI",
    type: "ai & ml",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    content:
      "We needed a real ML pipeline, not a chatbot wrapper. WiseMatic built and validated our recommendation model against actual production traffic before we ever shipped it.",
  },
  {
    name: "Aisha Rahman",
    role: "Product Lead, Clarity Support",
    type: "ai & ml",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    content:
      "Our support ticket triage model now handles first-pass classification with accuracy our team didn't think was possible in the timeline they gave us. It's cut response times noticeably.",
  },
  {
    name: "Victor Hollingsworth",
    role: "CTO, Ledger Sense",
    type: "ai & ml",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    content:
      "They were upfront that our first dataset wasn't clean enough to train on, which most vendors would have quietly ignored. That honesty is why the model actually works in production.",
  },

  // digital marketing
  {
    name: "Renee Castellano",
    role: "Marketing Director, Solace Wellness",
    type: "digital marketing",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    content:
      "Our organic traffic tripled within four months of WiseMatic taking over our SEO and content strategy. More importantly, the leads it brings in actually convert.",
  },
  {
    name: "Owen Fitzgerald",
    role: "Growth Lead, Basecamp Realty",
    type: "digital marketing",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    content:
      "They rebuilt our ad funnel from scratch and our cost per lead dropped by nearly forty percent. First agency we've worked with that reports on numbers that actually matter to us.",
  },
  {
    name: "Sophia Lindqvist",
    role: "CMO, Northbridge Apparel",
    type: "digital marketing",
    avatar: "https://randomuser.me/api/portraits/women/77.jpg",
    content:
      "WiseMatic treated our brand voice as seriously as the analytics. Every campaign felt like us, and every campaign also had a clear number attached to whether it worked.",
  },

  // ar & vr
  {
    name: "Isabelle Marchand",
    role: "Head of Innovation, Reveal Retail",
    type: "ar & vr",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Our AR try-on feature has become the most-used part of our app. WiseMatic got the tracking accuracy right on the first release, which we didn't expect for a first build.",
  },
  {
    name: "Felix Bergstrom",
    role: "Director of Training, Altair Industrial",
    type: "ar & vr",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "The VR training module they built cut our new-hire ramp time by weeks. Trainees actually retain the safety procedures because they're practicing them, not reading a manual.",
  },
  {
    name: "Naomi Reyes",
    role: "Product Manager, Panorama Events",
    type: "ar & vr",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    content:
      "WiseMatic delivered a virtual venue walkthrough that felt genuinely immersive, not gimmicky. Our clients now book venues sight-unseen based on it.",
  },

  // game dev
  {
    name: "Caleb Whitmore",
    role: "Studio Lead, Ironframe Games",
    type: "game dev",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    content:
      "WiseMatic's engineers dropped straight into our Unity codebase and shipped our multiplayer sync fixes faster than our own team estimated. Genuinely felt like an extension of the studio.",
  },
  {
    name: "Yuki Tanaka",
    role: "Producer, Nightfall Interactive",
    type: "game dev",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    content:
      "They optimized our mobile build's load times by nearly 60% without touching the art pipeline. Retention on day one jumped the week after that update went live.",
  },
  {
    name: "Ben Okafor",
    role: "Founder, Quiet Hours Studio",
    type: "game dev",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    content:
      "As a two-person studio we needed a partner who could just build, not manage us. WiseMatic shipped our save system and cloud sync exactly to spec and on time.",
  },
];
