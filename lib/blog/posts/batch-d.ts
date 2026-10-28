import {
  Post,
  h2,
  p,
  ul,
  ol,
  tip,
  warn,
  checklist,
  table,
  img,
  quote,
} from "../types";

const localSeo: Post = {
  slug: "local-seo-toronto-google-business-profile",
  title: "Local SEO for Toronto Businesses: Getting Found on Google Maps",
  description:
    "How Google ranks local results (relevance, distance, prominence) and a step-by-step plan to optimise your Google Business Profile, reviews and website.",
  publishAt: "2026-11-19T14:00:00Z",
  category: "Digital Marketing & SEO",
  keywords: [
    "local SEO Toronto",
    "Google Business Profile optimization",
    "Google Maps ranking",
    "local search marketing",
    "near me searches",
  ],
  hero: {
    src: "1507992781348-310259076fe0",
    alt: "Toronto skyline with the CN Tower at sunset over Lake Ontario",
  },
  service: {
    label: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
  },
  takeaways: [
    "Google ranks local results on three factors: relevance, distance and prominence.",
    "A complete, accurate and active Google Business Profile is the foundation of local visibility.",
    "Reviews matter for both ranking and conversion. Ask consistently and respond to every review.",
    "Your website must back up your profile with consistent details, location-relevant content and LocalBusiness structured data.",
  ],
  body: [
    p(
      'When someone searches "IT consultant near me" or "web developer Toronto," Google shows a map with a handful of businesses before any regular results. For local service businesses, that map pack can be the most valuable real estate on the internet. Here\'s how it works and how to earn your place.',
    ),
    h2("How Google ranks local results"),
    p(
      "Google explains that [local results are based primarily on three factors](https://support.google.com/business/answer/7091):",
    ),
    table(
      ["Factor", "What it means", "What you can influence"],
      [
        "Relevance",
        "How well your profile matches the search",
        "Categories, services, description and website content",
      ],
      [
        "Distance",
        "How far you are from the searcher or the location in the query",
        "Accurate address and service areas",
      ],
      [
        "Prominence",
        "How well known your business is",
        "Reviews, links, mentions and overall web presence",
      ],
    ),
    tip(
      "No pay-to-play",
      "Google states that you can't pay to improve your local ranking. Ads appear separately and are labelled. Organic local visibility is earned.",
    ),
    h2("Step 1: Claim and complete your Google Business Profile"),
    ul(
      "**Business name:** use your real-world name exactly. Adding keywords can violate Google's [guidelines for representing your business](https://support.google.com/business/answer/3038177) and risk suspension.",
      "**Primary category:** choose the most specific one that describes your core business, then add relevant secondary categories.",
      "**Address or service area:** show your address if customers visit you; use service areas if you go to them.",
      "**Hours, phone and website:** keep them accurate, including holiday hours.",
      "**Services and description:** describe what you do in plain language customers use.",
      "**Photos:** add real photos of your team, workplace and work. Authentic beats stock.",
    ),
    img(
      "1517090504586-fde19ea6066f",
      "Toronto waterfront with the CN Tower and city skyline seen from a park",
      "Local search is about being the trusted, obvious choice in your neighbourhood and city.",
    ),
    h2("Step 2: Build a steady flow of genuine reviews"),
    p(
      "Reviews influence prominence and, just as importantly, whether people choose you. Build reviews into your process:",
    ),
    ol(
      "Ask every satisfied customer at a natural moment, such as project completion.",
      "Send a direct review link by email or text to make it effortless.",
      "Respond to every review, positive or negative, professionally and promptly.",
      "Never buy reviews or offer incentives for positive ones; it violates Google's policies.",
    ),
    quote(
      "A thoughtful reply to a negative review often wins more trust than a dozen five-star ratings.",
    ),
    h2("Step 3: Make your website a local authority"),
    ul(
      "Keep your name, address and phone number identical on your site, profile and directories.",
      "Create service pages that mention the areas you serve, with genuinely useful local context, not keyword stuffing.",
      "Add [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) with your address, hours and contact details.",
      "Make sure the site is fast and mobile-friendly, since most local searches happen on phones.",
    ),
    h2("Step 4: Stay active"),
    p(
      "Use Google Business Profile posts for news, offers and events, answer questions in the Q&A section, and add fresh photos. Activity signals that your business is open and engaged, and it gives searchers more reasons to choose you.",
    ),
    warn(
      "Avoid fake locations",
      "Virtual offices or addresses where you don't actually serve customers can lead to profile suspension. Use service areas instead if you work from home or visit clients.",
    ),
    checklist(
      "Local SEO monthly checklist",
      "Profile details, hours and categories are accurate",
      "Two or more new photos added",
      "Every new review answered",
      "At least two profile posts published",
      "Website contact details match the profile exactly",
      "Calls, direction requests and website clicks reviewed in profile insights",
    ),
    h2("The bottom line"),
    p(
      "Local SEO rewards businesses that are accurate, active and genuinely well reviewed. Get the profile right, earn reviews steadily and back it up with a strong website. Our [digital marketing team](/services/digital-marketing) helps Toronto and GTA businesses grow their local visibility.",
    ),
  ],
  faq: [
    {
      q: "How long does local SEO take to work?",
      a: "Profile fixes can show results within weeks, while prominence from reviews, links and content builds over months. Consistency matters more than one-off effort.",
    },
    {
      q: "Can I rank in Toronto if my office is in a nearby city?",
      a: "Distance is a ranking factor, so it's hardest to appear in the map pack far from your location. Strong service pages and organic SEO can still help you appear in regular results for city searches.",
    },
    {
      q: "Should I add keywords to my business name on Google?",
      a: "No. Google's guidelines require your real-world business name. Keyword stuffing can lead to suspension.",
    },
  ],
  references: [
    {
      title: "Tips to improve your local ranking on Google",
      publisher: "Google Business Profile Help",
      url: "https://support.google.com/business/answer/7091",
    },
    {
      title: "Guidelines for representing your business on Google",
      publisher: "Google Business Profile Help",
      url: "https://support.google.com/business/answer/3038177",
    },
    {
      title: "Introduction to structured data markup in Google Search",
      publisher: "Google Search Central",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
  ],
};

const mvpPmf: Post = {
  slug: "mvp-to-product-market-fit-saas",
  title: "From MVP to Product-Market Fit: A Playbook for SaaS Founders",
  description:
    "What a minimum viable product really is, how to know when you've reached product-market fit, and the metrics and habits that get you there faster.",
  publishAt: "2026-11-21T14:00:00Z",
  category: "SaaS Development",
  keywords: [
    "minimum viable product",
    "product-market fit",
    "SaaS startup",
    "MVP development",
    "startup metrics retention",
  ],
  hero: {
    src: "1600880292203-757bb62b4baf",
    alt: "Two colleagues celebrating with a high five in a bright office",
  },
  service: { label: "SaaS Development", href: "/services/saas" },
  takeaways: [
    "An MVP is the smallest product that tests your riskiest assumption with real users. It's a learning tool, not a cheap version 1.0.",
    "Product-market fit shows up in behaviour: strong retention, organic referrals and customers pulling the product from you.",
    "Talk to users constantly and, early on, do things that don't scale to learn faster.",
    "Track a small set of honest metrics: activation, retention cohorts and how disappointed users would be if the product disappeared.",
  ],
  body: [
    p(
      "Most new software products don't fail because they're badly built. They fail because not enough people want them. The path from idea to a business is about **reducing that risk as quickly and cheaply as possible**, first with a minimum viable product, then by iterating toward product-market fit.",
    ),
    h2("What an MVP really is"),
    p(
      "A minimum viable product is the smallest thing you can build to test your riskiest assumption with real users. Sometimes that's a simple app; sometimes it's a landing page, a prototype or a manual service behind a basic interface. The goal is **validated learning**, not feature completeness.",
    ),
    table(
      ["MVP myth", "Reality"],
      [
        '"It\'s a cheap version of the full product."',
        "It's a focused experiment around one core problem.",
      ],
      [
        '"It can be buggy and ugly."',
        "It can be small, but the core experience must work and feel trustworthy.",
      ],
      [
        '"Launch it and see what happens."',
        "Define what you're testing and what result would change your plans.",
      ],
    ),
    h2("Do things that don't scale"),
    p(
      "Paul Graham's essay [\"Do Things that Don't Scale\"](https://paulgraham.com/ds.html) argues that founders should recruit early users by hand and give them an extraordinary experience, even when that approach can't scale. Manually onboarding users, sitting with them as they use the product and fixing problems the same day teaches you more than any analytics dashboard.",
    ),
    tip(
      "The founder habit",
      "Speak with at least five users every week in the early months. Ask about their problems and workflows, not just their opinions of your features.",
    ),
    h2("What product-market fit looks like"),
    p(
      'Marc Andreessen famously described product-market fit as ["being in a good market with a product that can satisfy that market"](https://pmarchive.com/guide_to_startups_part4.html), and noted that you can always feel when it\'s happening: customers buy as fast as you can deliver, and usage grows on its own.',
    ),
    ul(
      "**Retention flattens:** a meaningful share of each user cohort keeps using the product month after month.",
      "**Organic growth:** new users arrive through referrals and word of mouth.",
      "**Pull, not push:** customers ask for the product, chase you for features and complain when it's down.",
      "**The disappointment test:** a widely used benchmark (popularised by growth marketer Sean Ellis) asks users how they'd feel if they could no longer use the product. If around 40% or more say \"very disappointed,\" that's a strong signal.",
    ),
    img(
      "1551434678-e076c223a692",
      "Two developers collaborating at computers in a modern office",
      "Short build–measure–learn cycles help a small team learn faster than larger competitors.",
    ),
    h2("The metrics that matter early"),
    table(
      ["Metric", "Question it answers"],
      [
        "Activation rate",
        "Do new users reach the moment where they get real value?",
      ],
      [
        "Retention cohorts",
        "Do users keep coming back weeks and months later?",
      ],
      [
        "Engagement depth",
        "Do users rely on the core feature, or just poke around?",
      ],
      [
        "Referral / word of mouth",
        "Are users bringing others without being asked?",
      ],
      ["Revenue retention (B2B)", "Do paying customers stay and expand?"],
    ),
    warn(
      "Vanity metrics",
      "Sign-ups, page views and downloads feel good but say little about fit. Focus on retention and activation, which reflect real value.",
    ),
    h2("Building the MVP the right way"),
    ol(
      '**Define the riskiest assumption** ("Will busy clinic managers pay to automate reminders?").',
      "**Scope ruthlessly**: one user type, one core job, one great workflow.",
      "**Build on solid foundations**: authentication, security and data handling done properly, because trust is part of the product.",
      "**Instrument from day one**: track activation and retention events before launch.",
      "**Iterate weekly**: ship small improvements based on what users do and say.",
    ),
    p(
      "Y Combinator's [essential startup advice](https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice) sums up the spirit well: launch now, build something people want, and talk to your users.",
    ),
    checklist(
      "MVP readiness checklist",
      "One clearly stated riskiest assumption",
      "A target user you can reach directly",
      "A single core workflow that works reliably",
      "Analytics events for activation and retention",
      "A weekly user-interview habit",
      "A decision rule: what result means persevere, pivot or stop?",
    ),
    h2("The bottom line"),
    p(
      "An MVP is how you buy learning; product-market fit is the evidence you've found something people truly want. Stay close to users, measure honestly and iterate quickly. Our [SaaS development team](/services/saas) helps founders scope and build MVPs on foundations that can grow with success.",
    ),
  ],
  faq: [
    {
      q: "How long should it take to build an MVP?",
      a: "Many focused MVPs can be built in weeks to a few months. If the timeline stretches much longer, the scope probably includes more than the core assumption requires.",
    },
    {
      q: "How do I know I've reached product-market fit?",
      a: "Look for strong cohort retention, organic referrals and customers pulling the product from you. The Sean Ellis survey, where 40% or more would be very disappointed without the product, is a useful signal.",
    },
    {
      q: "Should an MVP be free?",
      a: "Not necessarily. Charging early, even a small amount, is often the strongest test of whether people value the product.",
    },
  ],
  references: [
    {
      title: "Do Things that Don't Scale",
      publisher: "Paul Graham",
      url: "https://paulgraham.com/ds.html",
    },
    {
      title:
        "The Pmarca Guide to Startups, part 4: The only thing that matters",
      publisher: "Marc Andreessen",
      url: "https://pmarchive.com/guide_to_startups_part4.html",
    },
    {
      title: "YC's Essential Startup Advice",
      publisher: "Y Combinator",
      url: "https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice",
    },
  ],
};

const finops: Post = {
  slug: "cloud-cost-optimization-finops",
  title:
    "Cloud Cost Optimisation: How to Stop Overpaying for Your Infrastructure",
  description:
    "Practical FinOps for growing businesses: find waste, rightsize resources, use commitment discounts wisely and build cost awareness into engineering.",
  publishAt: "2026-11-23T14:00:00Z",
  category: "Tech Consultation",
  keywords: [
    "cloud cost optimization",
    "FinOps",
    "reduce AWS costs",
    "cloud spending",
    "rightsizing cloud resources",
  ],
  hero: {
    src: "1558494949-ef010cbdcc31",
    alt: "Rows of server racks with network cables in a data centre",
  },
  service: { label: "Tech Consultation", href: "/services/tech-consultation" },
  takeaways: [
    "FinOps is a cultural practice that brings engineering, finance and business together to maximise the value of cloud spend.",
    "The fastest savings usually come from idle resources, oversized instances and storage nobody cleans up.",
    "Tagging and cost visibility come first: you can't optimise what you can't attribute.",
    "All three major clouds publish free cost-optimisation guidance in their well-architected frameworks.",
  ],
  body: [
    p(
      "The cloud makes it easy to launch anything in minutes, and equally easy to forget it's running. Many growing businesses find their cloud bill creeping up month after month without a clear reason. **Cloud cost optimisation** isn't about cutting corners; it's about paying only for value.",
    ),
    h2("What FinOps means"),
    p(
      "The [FinOps Foundation](https://www.finops.org/introduction/what-is-finops/) describes FinOps as an operational framework and cultural practice that maximises the business value of technology, enabling timely, data-driven decisions and creating financial accountability through collaboration between engineering, finance and business teams. In plain terms: the people who spend cloud money can see it, understand it and own it.",
    ),
    h2("Step 1: Make costs visible"),
    ul(
      "**Tag everything** with owner, environment (production, staging, development) and project or customer.",
      "**Set budgets and alerts** so unusual spikes are caught in days, not at month-end.",
      "**Share a simple monthly report** showing spend by team or product and the trend.",
    ),
    tip(
      "Unit economics",
      "Track cost per customer, per transaction or per active user. A rising bill is fine if revenue grows faster; a rising cost per customer is the real warning sign.",
    ),
    h2("Step 2: Remove waste"),
    table(
      ["Common waste", "What to do"],
      [
        "Idle development and test environments",
        "Schedule them to shut down outside working hours",
      ],
      [
        "Oversized servers and databases",
        "Rightsize based on actual CPU and memory use",
      ],
      [
        "Unattached disks, old snapshots and backups",
        "Apply retention policies and delete orphans",
      ],
      [
        "Forgotten experiments and proofs of concept",
        "Require an owner and expiry date for new resources",
      ],
      ["Expensive data transfer", "Review architecture, caching and CDN use"],
    ),
    img(
      "1544197150-b99a580bb7a8",
      "Close-up of network switches with blue ethernet cables",
      "Every running resource has an owner and a purpose, or it shouldn't be running.",
    ),
    h2("Step 3: Pay smarter for what you keep"),
    ul(
      "**Commitment discounts** (savings plans, reserved capacity or committed-use discounts) for steady, predictable workloads.",
      "**Spot or preemptible capacity** for fault-tolerant batch jobs and testing.",
      "**Autoscaling** so capacity follows demand instead of peak guesses.",
      "**Storage tiers** that move rarely accessed data to cheaper classes automatically.",
      "**Managed and serverless services** where they reduce both infrastructure and operations cost.",
    ),
    warn(
      "Don't over-commit",
      "Commitment discounts lock in spend for one to three years. Optimise and rightsize first, then commit only to the stable baseline.",
    ),
    h2("Step 4: Build cost into engineering"),
    p(
      "Lasting savings come from habits, not one-off clean-ups. The major providers' frameworks agree on this: see the [AWS Cost Optimization Pillar](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html), [Azure Well-Architected cost optimization](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/) and [Google Cloud's cost optimization guidance](https://cloud.google.com/architecture/framework/cost-optimization).",
    ),
    ol(
      "Include estimated running costs in architecture decisions.",
      "Show engineers the cost impact of their services in dashboards they already use.",
      "Review the top 10 cost items every month as a team.",
      "Celebrate savings the same way you celebrate shipped features.",
    ),
    quote(
      "The cheapest server is the one you turned off because nobody needed it.",
    ),
    checklist(
      "30-day cloud cost sprint",
      "Tag all resources with owner and environment",
      "Set budgets and anomaly alerts",
      "Shut down idle non-production environments out of hours",
      "Rightsize the 10 most expensive compute and database resources",
      "Delete orphaned disks, snapshots and old backups",
      "Evaluate commitment discounts for the stable baseline",
    ),
    h2("The bottom line"),
    p(
      "Cloud cost control is a team sport: visibility first, then waste removal, smarter pricing and engineering habits. Our [tech consultation team](/services/tech-consultation) runs cloud cost reviews that typically pay for themselves, then helps you keep savings in place.",
    ),
  ],
  faq: [
    {
      q: "What is FinOps?",
      a: "An operational framework and cultural practice that brings engineering, finance and business teams together to maximise the business value of cloud and technology spending.",
    },
    {
      q: "What's the quickest way to reduce cloud costs?",
      a: "Shut down idle non-production environments, rightsize oversized resources and delete unattached storage and old snapshots. These rarely affect customers.",
    },
    {
      q: "Are reserved instances or savings plans worth it?",
      a: "Yes for steady, predictable workloads, but optimise and rightsize first so you don't lock in paying for waste.",
    },
  ],
  references: [
    {
      title: "What is FinOps?",
      publisher: "FinOps Foundation",
      url: "https://www.finops.org/introduction/what-is-finops/",
    },
    {
      title: "Cost Optimization Pillar: AWS Well-Architected Framework",
      publisher: "Amazon Web Services",
      url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html",
    },
    {
      title: "Cost Optimization: Azure Well-Architected Framework",
      publisher: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/",
    },
    {
      title: "Google Cloud Architecture Framework: Cost optimization",
      publisher: "Google Cloud",
      url: "https://cloud.google.com/architecture/framework/cost-optimization",
    },
  ],
};

const vrTraining: Post = {
  slug: "vr-training-employee-learning-roi",
  title: "VR Training for Employees: When Immersive Learning Pays Off",
  description:
    "PwC found VR learners trained up to 4x faster than in the classroom. Where virtual reality training works best, what it costs, and how to run a pilot.",
  publishAt: "2026-11-25T14:00:00Z",
  category: "AR & VR",
  keywords: [
    "VR training",
    "virtual reality employee training",
    "immersive learning",
    "VR soft skills training",
    "VR training ROI",
  ],
  hero: {
    src: "1593508512255-86ab42a8e620",
    alt: "Man wearing a VR headset and holding controllers against a purple background",
  },
  service: { label: "AR & VR Development", href: "/services/ar-vr" },
  takeaways: [
    "In PwC's study, VR learners completed training up to 4x faster than classroom learners and were up to 275% more confident applying what they learned.",
    "VR shines for hazardous, expensive, rare or emotionally difficult situations that are hard to practise in real life.",
    "Cost per learner falls as more people train, so VR suits programmes that reach many employees.",
    "Start with one high-value scenario, measure against your current training and scale what works.",
  ],
  body: [
    p(
      "Reading a manual about handling an angry customer, a machine fault or an emergency is very different from experiencing it. **Virtual reality (VR) training** puts employees inside realistic scenarios where they can practise, make mistakes safely and build confidence. Here's where it delivers value.",
    ),
    h2("What the research says"),
    p(
      "PwC's study [The Effectiveness of Virtual Reality Soft Skills Training in the Enterprise](https://www.pwc.com/us/en/tech-effect/emerging-tech/virtual-reality-study.html) compared VR, classroom and e-learning for soft-skills training. Among its headline findings:",
    ),
    ul(
      "VR learners completed training **up to 4x faster** than classroom learners.",
      "VR learners were **up to 275% more confident** to act on what they learned.",
      "VR learners felt **up to 3.75x more emotionally connected** to the content than classroom learners.",
      "VR learners were **up to 4x more focused** than e-learners.",
    ),
    p(
      "The study also found VR became more cost-effective than classroom training as the number of learners grew, because content built once can be reused at scale.",
    ),
    h2("Where VR training works best"),
    table(
      ["Scenario type", "Why VR helps", "Examples"],
      [
        "Dangerous",
        "Practise safely without real-world risk",
        "Fire safety, working at heights, hazardous materials",
      ],
      [
        "Expensive or rare",
        "Repeat situations that are costly or infrequent",
        "Equipment failures, emergency procedures",
      ],
      [
        "Emotionally difficult",
        "Rehearse hard conversations realistically",
        "Customer de-escalation, feedback conversations, leadership",
      ],
      [
        "Spatial or procedural",
        "Learn by doing in 3D",
        "Equipment assembly, maintenance, facility orientation",
      ],
    ),
    img(
      "1592478411213-6153e4ebc07d",
      "Person wearing a VR headset in a vehicle training simulation shown on a screen",
      "Simulation lets people practise high-stakes situations repeatedly until the right response becomes instinct.",
    ),
    h2("When VR isn't the right tool"),
    p(
      "VR isn't ideal for everything. Simple knowledge transfer (policies, product facts) is usually cheaper with short videos or e-learning. Some people experience motion discomfort, so sessions should be short and comfortable, and alternatives should be available. VR works best as part of a blended programme.",
    ),
    tip(
      "Design for comfort",
      "Keep sessions to roughly 10–20 minutes, avoid artificial camera movement where possible, and let learners stand or sit as they prefer.",
    ),
    h2("How to run a VR training pilot"),
    ol(
      "**Choose one high-value scenario** where mistakes are costly and practice is hard to arrange.",
      "**Define success metrics**: time to competence, assessment scores, confidence, error or incident rates.",
      "**Build a focused experience** with realistic environments, meaningful choices and immediate feedback.",
      "**Compare against your current method** with a similar group trained the usual way.",
      "**Gather feedback** on realism, comfort and usefulness, then refine.",
      "**Scale** to more learners and scenarios once results are proven.",
    ),
    h2("What drives cost"),
    ul(
      "Number and complexity of scenarios and environments.",
      "Level of interactivity: branching conversations, physics, multi-user sessions.",
      "Hardware: standalone headsets have made deployment far simpler than older tethered systems.",
      "Integration with your learning management system for tracking and reporting.",
    ),
    warn(
      "Hardware is the easy part",
      "Programmes stall when headsets sit in a cupboard. Plan logistics (charging, hygiene, device management and scheduling) as carefully as the content.",
    ),
    checklist(
      "VR training readiness checklist",
      "A scenario that is risky, rare, costly or emotionally hard to practise",
      "Clear baseline metrics from current training",
      "An executive sponsor and a training owner",
      "A plan for headsets, charging, hygiene and device management",
      "Comfort guidelines and alternatives for learners who need them",
      "Integration with your learning platform for reporting",
    ),
    h2("The bottom line"),
    p(
      "VR training is most valuable where practice in the real world is dangerous, expensive or uncomfortable, and it becomes more cost-effective as it reaches more people. Start with one scenario, measure carefully and scale. Our [AR & VR team](/services/ar-vr) designs immersive training experiences around measurable learning outcomes.",
    ),
  ],
  faq: [
    {
      q: "Is VR training effective?",
      a: "Studies such as PwC's found VR learners trained faster, felt more confident and were more focused than classroom or e-learning groups, particularly for soft skills. Results depend on good scenario design.",
    },
    {
      q: "Is VR training expensive?",
      a: "Upfront content creation costs more than slides, but cost per learner falls as more employees train, making VR increasingly cost-effective at scale.",
    },
    {
      q: "What equipment do we need?",
      a: "Most programmes now use standalone VR headsets, which don't need a powerful PC. You'll also need a plan for device management, charging and hygiene.",
    },
  ],
  references: [
    {
      title:
        "How virtual reality is redefining soft skills training (The Effectiveness of VR Soft Skills Training in the Enterprise)",
      publisher: "PwC",
      url: "https://www.pwc.com/us/en/tech-effect/emerging-tech/virtual-reality-study.html",
    },
    {
      title: "Theory",
      publisher: "Center for Self-Determination Theory",
      url: "https://selfdeterminationtheory.org/theory/",
    },
    {
      title: "Web Content Accessibility Guidelines (WCAG) Overview",
      publisher: "W3C Web Accessibility Initiative",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    },
  ],
};

const posts = [localSeo, mvpPmf, finops, vrTraining];
export default posts;
