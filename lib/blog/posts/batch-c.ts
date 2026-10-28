import { Post, h2, h3, p, ul, ol, tip, warn, checklist, table, img } from "../types";

const accessibility: Post = {
  slug: "website-accessibility-wcag-aoda-guide",
  title: "Website Accessibility in Canada: A Practical Guide to WCAG and AODA",
  description:
    "27% of Canadians aged 15+ have a disability, and Ontario law requires many organisations to meet WCAG 2.0 AA. What to fix first, with a checklist.",
  publishAt: "2026-11-11T14:00:00Z",
  category: "Digital Marketing & SEO",
  keywords: [
    "website accessibility Canada",
    "AODA website requirements",
    "WCAG 2.2 AA",
    "accessible web design",
    "web accessibility checklist",
  ],
  hero: { src: "1486312338219-ce68d2c6f44d", alt: "Close-up of hands typing on a laptop keyboard" },
  service: { label: "Digital Marketing & Web", href: "/services/digital-marketing" },
  takeaways: [
    "Statistics Canada reports that 27% of Canadians aged 15 and over (about 8 million people) have one or more disabilities.",
    "Under Ontario's AODA regulations, private and non-profit organisations with 50+ employees must make public websites conform to WCAG 2.0 Level AA.",
    "The WebAIM Million found automatically detectable WCAG failures on 95.9% of the top one million home pages, so most sites have quick wins.",
    "Fix contrast, alt text, form labels, link and button names, and keyboard access first. They cover the most common failures.",
  ],
  body: [
    p(
      "Accessibility means people with disabilities can perceive, understand, navigate and interact with your website. It's a legal requirement for many Canadian organisations, a large market opportunity and, simply, good design. The good news: most common problems are straightforward to fix.",
    ),
    h2("Why it matters: people, law and business"),
    p(
      "According to Statistics Canada's [Canadian Survey on Disability](https://www150.statcan.gc.ca/n1/daily-quotidien/231201/dq231201b-eng.htm), **27% of Canadians aged 15 and older, about 8.0 million people, had one or more disabilities** in 2022. Add ageing eyes, temporary injuries and people using phones in bright sunlight, and accessible design benefits far more visitors than many businesses realise.",
    ),
    p(
      "The W3C's [business case for accessibility](https://www.w3.org/WAI/business-case/) also points to wider benefits: better usability for everyone, stronger SEO through cleaner structure, and reduced legal risk.",
    ),
    h2("What Ontario law requires"),
    p(
      "Under the Integrated Accessibility Standards Regulation ([O. Reg. 191/11](https://www.ontario.ca/laws/regulation/110191)) of the Accessibility for Ontarians with Disabilities Act (AODA), designated public sector organisations and private or non-profit organisations with **50 or more employees** in Ontario must make their public websites and web content conform to **WCAG 2.0 Level AA**, with limited exceptions. The Government of Ontario's guide on [how to make websites accessible](https://www.ontario.ca/page/how-make-websites-accessible) explains the requirements in plain language.",
    ),
    tip(
      "Aim for the current standard",
      "AODA references WCAG 2.0, but WCAG 2.2 is now the current W3C recommendation. Meeting [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/) also satisfies 2.0 AA and future-proofs your site.",
    ),
    h2("The most common failures (and how to fix them)"),
    p(
      "WebAIM's annual [Million report](https://webaim.org/projects/million/) scans the top one million home pages. Its 2026 analysis found detectable WCAG failures on **95.9%** of them. The most common issues:",
    ),
    table(
      ["Issue", "Share of home pages", "How to fix"],
      ["Low-contrast text", "83.9%", "Meet 4.5:1 contrast for normal text and 3:1 for large text"],
      ["Images missing alt text", "53.1%", "Describe meaningful images; use empty alt for decorative ones"],
      ["Form inputs without labels", "51%", "Give every field a visible, programmatically linked label"],
      ["Links with no text", "46.3%", "Ensure icon links have an accessible name"],
      ["Buttons with no text", "30.6%", "Add a label to icon-only buttons (e.g. aria-label=\"Search\")"],
      ["Missing page language", "13.5%", "Set the lang attribute on the html element"],
    ),
    img(
      "1516321318423-f06f85e504b3",
      "Two people reviewing a website together on a laptop",
      "Test with real people and assistive technologies, not just automated scanners.",
    ),
    h2("Beyond the scanner: what automated tools miss"),
    p(
      "Automated checkers find only part of the picture. Several important requirements need a human check:",
    ),
    ul(
      "**Keyboard access:** can you reach and use every link, menu, form and dialog with Tab, Enter and Escape, with a visible focus indicator?",
      "**Meaningful structure:** do headings follow a logical order, and are landmarks (header, nav, main, footer) used correctly?",
      "**Screen reader experience:** do announcements make sense, and are errors explained in text, not just colour?",
      "**Media:** do videos have captions, and is there a transcript for audio content?",
      "**Zoom and reflow:** does the page still work at 200% zoom and on a narrow screen without horizontal scrolling?",
    ),
    warn(
      "Overlays aren't a shortcut",
      "One-line \"accessibility overlay\" widgets can't fix underlying code problems and are criticised by many disability advocates. Fix the source instead.",
    ),
    h2("A practical rollout plan"),
    ol(
      "**Audit** your top templates (home, service, article, contact, checkout) with an automated tool plus a manual keyboard test.",
      "**Fix the design system first**: colours, buttons, form fields and components, so fixes flow into every page.",
      "**Train content editors** on alt text, headings, link text and captions.",
      "**Build it into your process**: include accessibility checks in design reviews and before each release.",
      "**Publish an accessibility statement** with a way for people to report barriers.",
    ),
    checklist(
      "Quick accessibility checklist",
      "Text contrast meets 4.5:1 (3:1 for large text)",
      "Every meaningful image has descriptive alt text",
      "All form fields have labels and clear error messages",
      "Every link and button has an accessible name",
      "The whole site works with a keyboard alone",
      "Page language is set and headings are in logical order",
      "Videos have captions",
    ),
    h2("The bottom line"),
    p(
      "Accessibility is a legal duty for many Ontario organisations and a competitive advantage for everyone. Start with the high-impact basics, fix them at the component level, and keep testing. Our [web and digital team](/services/digital-marketing) builds and audits sites against WCAG 2.2 AA.",
    ),
  ],
  faq: [
    {
      q: "Does AODA apply to my business website?",
      a: "Under O. Reg. 191/11, private and non-profit organisations in Ontario with 50 or more employees, plus designated public sector organisations, must make public websites conform to WCAG 2.0 Level AA, with limited exceptions. Check the regulation or get legal advice for your situation.",
    },
    {
      q: "What's the difference between WCAG 2.0, 2.1 and 2.2?",
      a: "Each version adds success criteria while keeping earlier ones. WCAG 2.2 is the current W3C recommendation; conforming to 2.2 AA also meets 2.0 AA.",
    },
    {
      q: "Can an automated tool make my site compliant?",
      a: "No. Automated scanners catch many common issues, but keyboard access, logical structure and screen reader experience need manual testing.",
    },
  ],
  references: [
    {
      title: "Canadian Survey on Disability, 2017 to 2022",
      publisher: "Statistics Canada (The Daily)",
      url: "https://www150.statcan.gc.ca/n1/daily-quotidien/231201/dq231201b-eng.htm",
    },
    { title: "O. Reg. 191/11: Integrated Accessibility Standards", publisher: "Government of Ontario", url: "https://www.ontario.ca/laws/regulation/110191" },
    { title: "How to make websites accessible", publisher: "Government of Ontario", url: "https://www.ontario.ca/page/how-make-websites-accessible" },
    { title: "Web Content Accessibility Guidelines (WCAG) 2.2", publisher: "W3C", url: "https://www.w3.org/TR/WCAG22/" },
    { title: "The WebAIM Million", publisher: "WebAIM", url: "https://webaim.org/projects/million/" },
    { title: "The Business Case for Digital Accessibility", publisher: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/business-case/" },
  ],
};

const gamification: Post = {
  slug: "gamification-customer-employee-engagement",
  title: "Gamification That Works: Using Game Design to Boost Engagement",
  description:
    "Points and badges alone don't motivate people. How to apply game design and self-determination theory to apps, training and loyalty programmes, ethically.",
  publishAt: "2026-11-13T14:00:00Z",
  category: "Game Development",
  keywords: [
    "gamification",
    "gamification in business",
    "user engagement",
    "self-determination theory",
    "gamified learning",
  ],
  hero: { src: "1511512578047-dfb367046420", alt: "Neon-lit arcade room with rows of game cabinets" },
  service: { label: "Game Development", href: "/services/game-dev" },
  takeaways: [
    "Gamification uses game design elements in non-game contexts. Research finds it can work, but results depend heavily on context and users.",
    "Lasting motivation comes from autonomy, competence and relatedness (self-determination theory), not from points alone.",
    "Design around a meaningful goal, clear progress, well-tuned challenge and fast feedback.",
    "Avoid manipulative patterns; respectful design builds trust and long-term engagement.",
  ],
  body: [
    p(
      "Games are extraordinarily good at holding attention: clear goals, constant feedback and challenges that grow with your skill. **Gamification** borrows those design elements for apps, training, onboarding and loyalty programmes. Done well, it makes useful behaviour more enjoyable. Done badly, it's a pile of badges nobody cares about.",
    ),
    h2("Does gamification actually work?"),
    p(
      "One of the most cited reviews, Hamari, Koivisto and Sarsa's [\"Does Gamification Work?\"](https://doi.org/10.1109/HICSS.2014.377) (2014), examined empirical studies and found that gamification **generally produces positive effects, but those effects depend greatly on the context and on the users involved**. In other words, the technique works when it fits the people and the task, and it doesn't when it's bolted on.",
    ),
    h2("The psychology: autonomy, competence, relatedness"),
    p(
      "[Self-determination theory](https://selfdeterminationtheory.org/theory/) identifies three basic psychological needs that support lasting, self-driven motivation:",
    ),
    table(
      ["Need", "What it means", "Design examples"],
      ["Autonomy", "Feeling in control of your choices", "Choose your path, set your own goals, optional challenges"],
      ["Competence", "Feeling capable and improving", "Clear progress, levels, skill-matched difficulty, useful feedback"],
      ["Relatedness", "Feeling connected to others", "Teams, shared goals, recognition from peers, community"],
    ),
    p(
      "Points, badges and leaderboards are tools, not goals. They work when they make competence visible or support connection, and they backfire when they feel controlling or pointless.",
    ),
    img(
      "1535223289827-42f1e9919769",
      "Young person smiling while playing in a colourful arcade",
      "The best gamified experiences feel like play because they're built on genuine motivation.",
    ),
    h2("Where gamification adds real value"),
    h3("Employee training and onboarding"),
    p(
      "Short missions, scenario-based challenges and visible progress make compliance and product training more engaging, especially when learners get immediate feedback on decisions.",
    ),
    h3("Customer onboarding in apps and SaaS"),
    p(
      "Progress checklists (\"3 of 5 steps complete\") guide new users to their first success quickly. That \"aha moment\" is strongly linked to whether people stay.",
    ),
    h3("Loyalty and community"),
    p(
      "Tiered rewards, challenges and community recognition can deepen loyalty when rewards feel fair and attainable.",
    ),
    h3("Health, learning and habit-building"),
    p(
      "Streaks, small goals and milestones help people build habits, provided the design forgives missed days rather than punishing them.",
    ),
    h2("A five-step design process"),
    ol(
      "**Define the behaviour and the outcome:** \"complete onboarding within 7 days\" is better than \"increase engagement.\"",
      "**Understand your players:** what motivates them, what frustrates them and how much time they have.",
      "**Design the core loop:** action → feedback → progress → new challenge.",
      "**Choose mechanics that serve the needs:** progress bars for competence, choices for autonomy, teams for relatedness.",
      "**Test and tune:** watch real users, adjust difficulty and rewards, and measure the outcome, not just clicks.",
    ),
    warn(
      "Avoid dark patterns",
      "Manipulative streak pressure, artificial scarcity or rewards that trap people into spending erode trust. Respectful design (easy opt-outs, honest rewards, no guilt) wins long term.",
    ),
    checklist(
      "Gamification design checklist",
      "A clear, meaningful goal users actually care about",
      "Visible progress and immediate feedback",
      "Challenge that adapts to skill",
      "Choices that give users a sense of control",
      "Social features that encourage, not shame",
      "Metrics tied to business outcomes",
    ),
    h2("The bottom line"),
    p(
      "Gamification works when it's grounded in real motivation and designed for a specific audience and goal. Our [game development team](/services/game-dev) brings game design expertise to training, apps and customer experiences.",
    ),
  ],
  faq: [
    {
      q: "What is gamification?",
      a: "The use of game design elements, such as goals, progress, challenges, feedback and rewards, in non-game contexts like training, apps, marketing and loyalty programmes.",
    },
    {
      q: "Why do some gamification projects fail?",
      a: "They add points and badges without a meaningful goal, ignore what motivates users, or rely on manipulative pressure. Research shows effects depend heavily on context and users.",
    },
    {
      q: "Is gamification only for young people?",
      a: "No. Well-designed challenges, progress and recognition motivate people of all ages; the mechanics and tone should simply match your audience.",
    },
  ],
  references: [
    {
      title: "Does Gamification Work? A Literature Review of Empirical Studies on Gamification (HICSS 2014)",
      publisher: "Hamari, Koivisto & Sarsa (IEEE)",
      url: "https://doi.org/10.1109/HICSS.2014.377",
    },
    { title: "Theory", publisher: "Center for Self-Determination Theory", url: "https://selfdeterminationtheory.org/theory/" },
    {
      title: "10 Usability Heuristics for User Interface Design",
      publisher: "Nielsen Norman Group",
      url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
    },
  ],
};

const owasp: Post = {
  slug: "owasp-top-10-2025-business-guide",
  title: "The OWASP Top 10 (2025) Explained for Business Leaders",
  description:
    "The 2025 OWASP Top 10 in plain English: what each web application risk means, why breaches cost millions, and the questions to ask your development team.",
  publishAt: "2026-11-15T14:00:00Z",
  category: "Tech Consultation",
  keywords: [
    "OWASP Top 10 2025",
    "web application security",
    "software supply chain security",
    "secure software development",
    "cybersecurity for SMBs",
  ],
  hero: { src: "1563986768609-322da13575f3", alt: "Person holding a phone with a laptop open on a desk, representing app security" },
  service: { label: "Tech Consultation", href: "/services/tech-consultation" },
  takeaways: [
    "The OWASP Top 10 is the most widely used awareness list of web application security risks. The current edition is 2025.",
    "Broken access control remains number one, and software supply chain failures are now third, reflecting attacks on dependencies and build systems.",
    "Verizon's 2026 DBIR found that 31% of breaches start with exploited software vulnerabilities, overtaking stolen passwords.",
    "Ask your team how each risk is addressed, and build security into design, code review, dependencies and monitoring.",
  ],
  body: [
    p(
      "If your business runs a web app, customer portal or online store, your security depends on how that software was built. The **OWASP Top 10** is the industry's best-known list of the most critical web application security risks. You don't need to be a developer to use it: it's an excellent checklist for asking the right questions.",
    ),
    h2("Why this matters now"),
    p(
      "IBM's [Cost of a Data Breach report](https://www.ibm.com/reports/data-breach) puts the global average cost of a breach at **US$4.99 million** in its latest edition. Verizon's 2026 [Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) found that **31% of breaches now start with exploited software vulnerabilities**, overtaking stolen passwords as the top way attackers get in, and that **48% of breaches involve ransomware**.",
    ),
    h2("The OWASP Top 10: 2025, in plain English"),
    table(
      ["#", "Risk", "What it means"],
      ["A01", "Broken Access Control", "Users can see or do things they shouldn't, such as another customer's invoices"],
      ["A02", "Security Misconfiguration", "Unsafe defaults, exposed admin panels, overly permissive cloud storage"],
      ["A03", "Software Supply Chain Failures", "Compromised or vulnerable libraries, packages and build pipelines"],
      ["A04", "Cryptographic Failures", "Sensitive data not encrypted properly in transit or at rest"],
      ["A05", "Injection", "Untrusted input executed as commands or queries (e.g. SQL injection)"],
      ["A06", "Insecure Design", "Security flaws baked into the design, not just the code"],
      ["A07", "Authentication Failures", "Weak login, session or password-reset handling"],
      ["A08", "Software or Data Integrity Failures", "Trusting updates, data or code without verifying them"],
      ["A09", "Security Logging and Alerting Failures", "Attacks go unnoticed because nothing is logged or alerted"],
      ["A10", "Mishandling of Exceptional Conditions", "Errors and edge cases that leave the system in an unsafe state"],
    ),
    p(
      "Source: [OWASP Top 10 project](https://owasp.org/www-project-top-ten/). Two changes stand out in 2025: **software supply chain failures** entered the list at number three, and **mishandling of exceptional conditions** joined at number ten.",
    ),
    img(
      "1526374965328-7f61d4dc18c5",
      "Green code characters streaming down a dark screen",
      "Most breaches exploit ordinary weaknesses: missing access checks, outdated components and misconfiguration.",
    ),
    h2("Questions to ask your development team"),
    h3("Access control and authentication"),
    ul(
      "Is every request checked on the server to confirm the user may access that specific record?",
      "Do we offer multi-factor authentication, especially for admin accounts?",
    ),
    h3("Supply chain and configuration"),
    ul(
      "Do we track all third-party libraries and get alerts for known vulnerabilities?",
      "Are production settings, secrets and cloud storage reviewed and locked down?",
    ),
    h3("Design, data and monitoring"),
    ul(
      "Do we threat-model new features before building them?",
      "Is sensitive data encrypted in transit and at rest, and do we collect only what we need?",
      "Would we know within hours, not months, if someone was attacking us?",
    ),
    tip(
      "Secure by design",
      "The U.S. CISA's [Secure by Design](https://www.cisa.gov/securebydesign) initiative urges software makers to take ownership of customer security outcomes, with secure defaults, MFA and transparency, instead of leaving security to customers.",
    ),
    h2("A baseline for smaller organisations"),
    p(
      "The Canadian Centre for Cyber Security publishes [Baseline cyber security controls for small and medium organizations](https://www.cyber.gc.ca/en/guidance/baseline-cyber-security-controls-small-and-medium-organizations), covering essentials like patching, MFA, backups, access control and incident response. Pair it with the OWASP Top 10 for your custom software.",
    ),
    warn(
      "Patching is not optional",
      "With vulnerability exploitation now a leading entry point, delaying updates to frameworks, plugins and servers is one of the most expensive habits a business can have.",
    ),
    checklist(
      "Application security essentials",
      "Server-side authorisation checks on every sensitive action",
      "MFA for admins and staff accounts",
      "Dependency scanning and a patching schedule",
      "Hardened production configuration and secret management",
      "Encryption in transit (HTTPS) and at rest for sensitive data",
      "Centralised logging with alerts for suspicious activity",
      "Tested backups and an incident response plan",
    ),
    h2("The bottom line"),
    p(
      "You don't need to be a security expert to lead on security. Use the OWASP Top 10 as your shared vocabulary, ask the right questions and fund the basics. Our [tech consultation team](/services/tech-consultation) reviews applications against the OWASP Top 10 and helps prioritise fixes.",
    ),
  ],
  faq: [
    {
      q: "What is the OWASP Top 10?",
      a: "An awareness document published by the OWASP Foundation listing the most critical security risks to web applications. The current edition is 2025.",
    },
    {
      q: "What's new in the OWASP Top 10 2025?",
      a: "Software Supply Chain Failures (A03) and Mishandling of Exceptional Conditions (A10) are new entries, while Broken Access Control remains the number one risk.",
    },
    {
      q: "Is the OWASP Top 10 a compliance standard?",
      a: "Not formally. It's an awareness list, but it is widely referenced by security standards, contracts and auditors as a baseline for secure development.",
    },
  ],
  references: [
    { title: "OWASP Top 10 project (2025 edition)", publisher: "OWASP Foundation", url: "https://owasp.org/www-project-top-ten/" },
    { title: "Cost of a Data Breach Report", publisher: "IBM", url: "https://www.ibm.com/reports/data-breach" },
    { title: "Data Breach Investigations Report", publisher: "Verizon Business", url: "https://www.verizon.com/business/resources/reports/dbir/" },
    { title: "Secure by Design", publisher: "Cybersecurity and Infrastructure Security Agency (CISA)", url: "https://www.cisa.gov/securebydesign" },
    {
      title: "Baseline cyber security controls for small and medium organizations",
      publisher: "Canadian Centre for Cyber Security",
      url: "https://www.cyber.gc.ca/en/guidance/baseline-cyber-security-controls-small-and-medium-organizations",
    },
  ],
};

const supportBot: Post = {
  slug: "ai-customer-support-chatbot-guide",
  title: "AI Customer Support That Customers Actually Like: A Design Guide",
  description:
    "Chatbots are among the most common AI uses in Canadian businesses. How to design AI support that resolves issues, hands off gracefully and protects trust.",
  publishAt: "2026-11-17T14:00:00Z",
  category: "AI & Machine Learning",
  keywords: [
    "AI customer support",
    "AI chatbot for business",
    "customer service automation",
    "chatbot best practices",
    "conversational AI",
  ],
  hero: { src: "1573497019940-1c28c88b4f3e", alt: "Smiling customer service professional in an office" },
  service: { label: "AI & Machine Learning", href: "/services/ai-ml" },
  takeaways: [
    "Virtual agents and chatbots are among the most common AI applications in Canadian businesses that use AI (26.5%, Statistics Canada).",
    "Ground the assistant in your own help content and policies so answers are accurate, current and on-brand.",
    "Make escalation to a person easy and seamless, with the conversation history passed along.",
    "Measure resolution and satisfaction, not deflection. A bot that blocks customers from humans damages loyalty.",
  ],
  body: [
    p(
      "Everyone has battled a chatbot that couldn't understand a simple question and wouldn't let them reach a person. Modern AI makes far better assistants possible, but only with thoughtful design. According to [Statistics Canada](https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2024008-eng.htm), **26.5% of Canadian businesses using AI use virtual agents or chatbots**, making support one of the most popular places to start.",
    ),
    h2("Why old chatbots frustrated people"),
    p(
      "Research by the Nielsen Norman Group on [chatbot usability](https://www.nngroup.com/articles/chatbots/) found that users became frustrated when bots misunderstood requests, failed to handle anything outside narrow scripts and made it hard to reach a human. Users valued bots most for simple, well-defined tasks.",
    ),
    h2("Principles for AI support people actually like"),
    h3("1. Be honest that it's an assistant"),
    p(
      "Say clearly that customers are chatting with an AI assistant and what it can help with. Setting expectations reduces frustration and builds trust.",
    ),
    h3("2. Ground answers in your knowledge"),
    p(
      "Connect the assistant to your help centre, product documentation and policies, and instruct it to answer only from those sources. When it doesn't know, it should say so and offer a person, never guess about refunds, prices or safety.",
    ),
    h3("3. Make the handoff effortless"),
    p(
      "Offer \"talk to a person\" at any point, and pass the full conversation to the agent so customers never repeat themselves. Escalate automatically for frustration, complaints, sensitive topics or high-value accounts.",
    ),
    h3("4. Take action, safely"),
    p(
      "The biggest value comes when the assistant can do things: check order status, book appointments, update details. Limit permissions to what each task needs and confirm before anything irreversible.",
    ),
    img(
      "1563986768609-322da13575f3",
      "Customer using a smartphone while working on a laptop",
      "Customers expect instant, accurate help on any device, with a person available when it matters.",
    ),
    h2("What to automate first"),
    table(
      ["Good first automations", "Keep with humans (at first)"],
      ["Order and delivery status", "Complaints and escalations"],
      ["Opening hours, policies, how-to questions", "Billing disputes and refunds above a threshold"],
      ["Appointment booking and changes", "Sensitive personal or health matters"],
      ["Password resets and account basics", "Complex technical troubleshooting"],
    ),
    tip(
      "Use your data",
      "Export the last few months of support tickets and group them by topic. The top five repetitive, low-risk topics are your best starting point.",
    ),
    h2("Measure what customers feel"),
    ul(
      "**Resolution rate:** issues fully resolved without a follow-up contact.",
      "**Customer satisfaction (CSAT)** for AI-handled versus human-handled conversations.",
      "**Escalation quality:** do agents receive enough context to help immediately?",
      "**Accuracy:** regular human review of a sample of AI answers.",
    ),
    warn(
      "Deflection is not a success metric",
      "Counting how many customers never reached a person rewards a bot that blocks them. Optimise for resolved issues and satisfied customers instead.",
    ),
    h2("Privacy and security"),
    p(
      "Support conversations often contain personal information. Follow [PIPEDA](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/) principles: collect only what's needed, secure it, and be transparent. Because the assistant reads customer messages, design against prompt injection as described in the [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/).",
    ),
    checklist(
      "AI support launch checklist",
      "Clear disclosure that customers are chatting with AI",
      "Answers grounded in approved help content",
      "One-click handoff to a person with full context",
      "Limited, confirmed actions only",
      "CSAT and resolution tracked from day one",
      "Weekly review of a sample of conversations",
    ),
    h2("The bottom line"),
    p(
      "Great AI support is fast, accurate, honest and never a dead end. Start with your most repetitive questions, ground the assistant in your own knowledge and keep people close by. Our [AI & Machine Learning team](/services/ai-ml) designs and builds support assistants with safe handoffs and real integrations.",
    ),
  ],
  faq: [
    {
      q: "Will an AI chatbot replace my support team?",
      a: "Rarely. The best results come from AI handling repetitive questions instantly while people focus on complex, sensitive and high-value conversations.",
    },
    {
      q: "How do we stop the chatbot giving wrong answers?",
      a: "Ground it in your approved help content, instruct it to say when it doesn't know, restrict risky topics to humans and review samples of conversations regularly.",
    },
    {
      q: "Should customers be told they're talking to AI?",
      a: "Yes. Clear disclosure sets expectations, builds trust and is increasingly expected by customers and regulators.",
    },
  ],
  references: [
    {
      title: "Analysis on artificial intelligence use by businesses in Canada, second quarter of 2024",
      publisher: "Statistics Canada",
      url: "https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2024008-eng.htm",
    },
    { title: "The User Experience of Chatbots", publisher: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/chatbots/" },
    { title: "CX Trends Report", publisher: "Zendesk", url: "https://www.zendesk.com/cx-trends-report/" },
    {
      title: "OWASP Top 10 for Large Language Model Applications",
      publisher: "OWASP Foundation",
      url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    },
  ],
};

const posts = [accessibility, gamification, owasp, supportBot];
export default posts;
