import {
  Post,
  h2,
  h3,
  p,
  ul,
  ol,
  tip,
  warn,
  checklist,
  table,
  img,
} from "../types";

const post: Post = {
  slug: "ai-roadmap-for-small-business",
  title: "How Small Businesses Can Start Using AI: A Practical 90-Day Roadmap",
  description:
    "Only 6.1% of Canadian businesses use AI to deliver products or services. Here is a low-risk, 90-day plan to find, test and scale your first AI use case.",
  publishAt: "2026-10-28T13:00:00Z",
  category: "AI & Machine Learning",
  keywords: [
    "AI for small business",
    "AI adoption roadmap",
    "AI use cases Canada",
    "how to start with AI",
    "AI pilot project",
  ],
  hero: {
    src: "1677442136019-21780ecad995",
    alt: "Abstract 3D letters spelling AI on a blue background",
  },
  service: { label: "AI & Machine Learning", href: "/services/ai-ml" },
  takeaways: [
    "Most Canadian businesses have not adopted AI yet: Statistics Canada found 6.1% used it to produce goods or deliver services, so starting now is still an advantage.",
    "Start from a costly, repetitive business problem, not from a tool. The best first projects save hours every week and are easy to measure.",
    "Run a time-boxed pilot with a baseline metric, a human reviewer and a clear go/no-go decision at day 60.",
    "Treat data privacy (PIPEDA) and accuracy checks as part of the project from day one, not as an afterthought.",
  ],
  body: [
    p(
      "Artificial intelligence has moved from research labs into everyday software, but for most small and mid-sized businesses the real question is not whether AI matters. It is **where to start without wasting money**. This guide gives you a simple 90-day roadmap you can follow with a small team and a modest budget.",
    ),
    h2("Where Canadian businesses actually stand"),
    p(
      "It is easy to assume everyone else has already automated half their business. The data says otherwise. In its 2024 analysis, [Statistics Canada](https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2024008-eng.htm) reported that **6.1% of Canadian businesses** used AI in producing goods or delivering services over the previous 12 months, while **11.5% planned to adopt AI software** within the next year.",
    ),
    p(
      "Among businesses already using AI, the most common applications were natural language processing (28.9%), text analytics (27.0%) and virtual agents or chatbots (26.5%). In other words, the early adopters are using AI for language-heavy work: reading, writing, sorting and answering. That is good news, because language tasks exist in almost every company.",
    ),
    tip(
      "What this means for you",
      "You are not late. A focused pilot today can still put you ahead of most competitors in your market, especially in customer service, sales operations and back-office admin.",
    ),
    h2("Step 1 (Days 1–15): Find the right first problem"),
    p(
      'The most common mistake is starting with a tool ("we should use a chatbot") instead of a problem ("we spend 30 hours a week answering the same supplier emails"). Good first AI projects share four traits:',
    ),
    ul(
      "**Repetitive:** the task happens daily or weekly and follows a recognisable pattern.",
      "**Language- or document-heavy:** emails, tickets, invoices, quotes, contracts, product descriptions.",
      "**Measurable:** you can count time spent, response time, error rate or conversion rate today.",
      "**Low-risk if wrong:** a person can review the output before it reaches a customer.",
    ),
    p(
      "Run a 60-minute workshop with the people who actually do the work. Ask each person to list the three tasks they would most like to stop doing. You will usually find two or three strong candidates within an hour.",
    ),
    table(
      [
        "Candidate use case",
        "Where the saving comes from",
        "Risk level",
        "Good first pilot?",
      ],
      [
        "Drafting replies to common customer emails",
        "Less typing and searching per reply",
        "Low (a person sends)",
        "Yes",
      ],
      [
        "Extracting data from invoices into accounting",
        "Less manual data entry",
        "Low–medium",
        "Yes",
      ],
      [
        "Summarising sales calls into CRM notes",
        "Minutes saved after every call",
        "Low",
        "Yes",
      ],
      [
        "Fully automated pricing decisions",
        "Unclear",
        "High",
        "Not as a first project",
      ],
    ),
    h2("Step 2 (Days 16–30): Set a baseline and success criteria"),
    p(
      'You cannot prove value without a "before" number. For one or two weeks, measure the current process: how long it takes, how many errors occur and what it costs. Then agree on what success looks like before you build anything. For example: reduce average email handling time from 6 minutes to 3 minutes with no drop in customer satisfaction.',
    ),
    checklist(
      "Your one-page pilot charter",
      "The business problem in one sentence",
      "The baseline metric and how you measured it",
      "The target improvement and the date you will judge it",
      "Who reviews AI output, and what they check",
      "What data the tool may and may not see",
      "The budget ceiling for the pilot",
    ),
    h2("Step 3 (Days 31–60): Build a small, supervised pilot"),
    p(
      "Keep the first version deliberately small. In many cases you do not need a custom model at all: modern AI services can be connected to your existing tools (email, helpdesk, CRM) through their APIs. Most of the work is in clear instructions, good examples from your own business and a simple review screen.",
    ),
    img(
      "1485827404703-89b55fcc595e",
      "A friendly white service robot standing in an office",
      "Most successful first AI projects are assistants that support staff, not replacements for them.",
    ),
    h3("Keep a human in the loop"),
    p(
      "During the pilot, every AI output should be reviewed by a person before it reaches a customer or a financial system. Track how often reviewers accept, edit or reject suggestions. That acceptance rate is one of your most useful quality signals.",
    ),
    h3("Protect your data"),
    p(
      "If the AI will see personal information, Canada's private-sector privacy law, [PIPEDA](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/), still applies. Check where your provider stores and processes data, whether your inputs are used to train their models, and how long data is kept. Remove personal details you do not need.",
    ),
    warn(
      "Avoid this trap",
      "Do not paste confidential customer or employee data into free consumer AI tools. Use a business account or API with clear data-handling terms, and document what you approved.",
    ),
    h2("Step 4 (Days 61–75): Measure and decide"),
    p(
      "Compare your pilot results with the baseline. Be honest: a pilot that saves 20% instead of 50% may still be very profitable, and a pilot that saves time but frustrates customers is not a success. Make one of three decisions:",
    ),
    ol(
      "**Scale it:** the metric improved and quality held. Plan the rollout.",
      "**Adjust it:** results are promising but uneven. Improve the instructions or examples and run another short cycle.",
      "**Stop it:** the value is not there. Write down what you learned and move to the next candidate.",
    ),
    h2("Step 5 (Days 76–90): Scale responsibly"),
    p(
      "Scaling means turning a pilot into a dependable part of operations. Train the wider team, add monitoring (volume, acceptance rate, errors), document how the system works and assign an owner. The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) offers a practical structure built around four functions (Govern, Map, Measure and Manage) that scales down well to smaller organisations.",
    ),
    p(
      "Once your first use case is stable, revisit your workshop list. Each new project gets faster, because your team now knows how to scope, measure and govern AI work.",
    ),
    h2("How much does a first AI project cost?"),
    p(
      "Costs vary with complexity, but a focused pilot that connects an existing AI service to one workflow is usually far cheaper than people expect. Most of the investment goes into design, integration and testing, not the AI itself. Usage-based AI pricing also means you pay in proportion to volume, so a pilot is easy to cap. The bigger risk is not the invoice; it is choosing a problem that was never worth solving.",
    ),
    h2("The bottom line"),
    p(
      "AI rewards businesses that are practical. Pick one painful, measurable process, run a supervised pilot with a clear decision date, protect your data, and scale only what works. If you would like a second pair of eyes on your shortlist, our [AI & Machine Learning team](/services/ai-ml) helps businesses go from idea to working pilot.",
    ),
  ],
  faq: [
    {
      q: "Do I need my own data scientists to start using AI?",
      a: "No. Most first projects connect an existing AI service to your current tools. You need someone who understands the business process, plus a development partner or technical lead for integration, testing and security.",
    },
    {
      q: "What is a good first AI project for a small business?",
      a: "Language-heavy, repetitive work with a human reviewer: drafting email replies, summarising calls into your CRM, or extracting data from invoices and forms.",
    },
    {
      q: "How long should an AI pilot run?",
      a: "Plan about 30 days of real use after the build, enough to collect meaningful numbers, and set a firm go/no-go decision date before you start.",
    },
    {
      q: "Is it legal to use AI with customer data in Canada?",
      a: "It can be, but PIPEDA still applies. Limit personal data to what you need, check how your provider stores and uses it, and be transparent with customers.",
    },
  ],
  references: [
    {
      title:
        "Analysis on artificial intelligence use by businesses in Canada, second quarter of 2024",
      publisher: "Statistics Canada",
      url: "https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2024008-eng.htm",
    },
    {
      title: "AI Risk Management Framework",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://www.nist.gov/itl/ai-risk-management-framework",
    },
    {
      title:
        "The Personal Information Protection and Electronic Documents Act (PIPEDA)",
      publisher: "Office of the Privacy Commissioner of Canada",
      url: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/",
    },
    {
      title: "AI Index Report",
      publisher:
        "Stanford Institute for Human-Centered Artificial Intelligence",
      url: "https://hai.stanford.edu/ai-index",
    },
  ],
};

export default post;
