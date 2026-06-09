import { COMPANY, QUICK_SUGGESTIONS, SERVICES, type ServiceInfo } from "./chat-knowledge";

export type ChatAction = {
  label: string;
  type: "link" | "quick_reply" | "show_form" | "email" | "phone";
  value: string;
};

export type ChatAgentResponse = {
  response: string;
  actions?: ChatAction[];
  showContactForm?: boolean;
  suggestions?: string[];
};

function normalize(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
}

function includesAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term));
}

function findMatchingServices(text: string): ServiceInfo[] {
  return SERVICES.filter((service) =>
    service.keywords.some((keyword) => text.includes(keyword)),
  );
}

function formatService(service: ServiceInfo): string {
  return `${service.title}
${service.description}

Key offerings:
${service.features.map((feature) => `• ${feature}`).join("\n")}

Learn more: ${service.href}`;
}

function contactResponse(): ChatAgentResponse {
  return {
    response: `I'd be happy to connect you with our team!

📧 Email: ${COMPANY.email}
📞 Phone: ${COMPANY.phone}
📍 Office: ${COMPANY.address}

You can also fill out a quick form right here in the chat, visit our Contact Us page, or email us directly.`,
    actions: [
      { label: "Fill out form", type: "show_form", value: "form" },
      { label: "Contact Us page", type: "link", value: COMPANY.contactPage },
      { label: `Email ${COMPANY.email}`, type: "email", value: COMPANY.email },
      { label: `Call ${COMPANY.phone}`, type: "phone", value: COMPANY.phoneTel },
    ],
    suggestions: ["I'd like to submit a form", "What services do you offer?"],
  };
}

function servicesOverviewResponse(): ChatAgentResponse {
  const serviceList = SERVICES.map(
    (service) => `• ${service.title} — ${service.href}`,
  ).join("\n");

  return {
    response: `WiseMatic offers seven core services to help businesses grow with technology:

${serviceList}

Ask me about any specific service (e.g. "Tell me about SaaS" or "What is AI & ML?") and I'll share more details.`,
    actions: [
      { label: "View all services", type: "link", value: COMPANY.servicesPage },
      { label: "Contact our team", type: "show_form", value: "form" },
    ],
    suggestions: [
      "Tell me about AI & ML",
      "Tell me about SaaS Development",
      "I want to get a quote",
    ],
  };
}

function greetingResponse(): ChatAgentResponse {
  return {
    response: `Hello! 👋 I'm the WiseMatic virtual assistant. I can help you with:

• Information about our services (AI/ML, SaaS, AR/VR, and more)
• Company details and office location
• Connecting you with our team at ${COMPANY.email}
• Submitting a contact form or sharing our phone number

How can I help you today?`,
    actions: [
      { label: "Our Services", type: "quick_reply", value: "What services do you offer?" },
      { label: "Contact Us", type: "quick_reply", value: "I want to contact someone" },
      { label: "Contact page", type: "link", value: COMPANY.contactPage },
    ],
    suggestions: QUICK_SUGGESTIONS,
  };
}

export function getChatResponse(query: string): ChatAgentResponse {
  const text = normalize(query);

  if (!text) {
    return greetingResponse();
  }

  if (
    includesAny(text, [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
    ])
  ) {
    return greetingResponse();
  }

  if (
    includesAny(text, [
      "form",
      "submit",
      "fill out",
      "send message",
      "reach out",
      "get in touch",
      "leave a message",
      "request callback",
      "callback",
    ])
  ) {
    return {
      response:
        "Absolutely! Please fill out the form below and our team will get back to you shortly. You can also email us at info@wisematic.ca if you prefer.",
      showContactForm: true,
      actions: [
        { label: `Email ${COMPANY.email}`, type: "email", value: COMPANY.email },
        { label: `Call ${COMPANY.phone}`, type: "phone", value: COMPANY.phoneTel },
      ],
    };
  }

  if (
    includesAny(text, [
      "contact",
      "email",
      "phone",
      "call",
      "reach",
      "talk to",
      "speak to",
      "human",
      "agent",
      "representative",
      "support",
    ])
  ) {
    return contactResponse();
  }

  if (
    includesAny(text, [
      "price",
      "pricing",
      "cost",
      "quote",
      "estimate",
      "budget",
      "how much",
    ])
  ) {
    return {
      response: `Pricing depends on your project scope and requirements. Our team provides tailored quotes after understanding your needs.

The best way to get started:
📧 Email ${COMPANY.email}
📞 Call ${COMPANY.phone}
📝 Fill out the form below or visit ${COMPANY.contactPage}`,
      showContactForm: true,
      actions: [
        { label: "Contact Us page", type: "link", value: COMPANY.contactPage },
        { label: `Email ${COMPANY.email}`, type: "email", value: COMPANY.email },
        { label: `Call ${COMPANY.phone}`, type: "phone", value: COMPANY.phoneTel },
      ],
    };
  }

  if (
    includesAny(text, [
      "address",
      "location",
      "office",
      "where are you",
      "where is",
      "toronto",
      "visit",
    ])
  ) {
    return {
      response: `Our office is located at:

📍 ${COMPANY.address}

📞 ${COMPANY.phone}
📧 ${COMPANY.email}

Would you like to schedule a visit or send us a message?`,
      actions: [
        { label: "Contact Us", type: "link", value: COMPANY.contactPage },
        { label: "Fill out form", type: "show_form", value: "form" },
        { label: `Call ${COMPANY.phone}`, type: "phone", value: COMPANY.phoneTel },
      ],
    };
  }

  if (includesAny(text, ["thank", "thanks", "appreciate"])) {
    return {
      response: `You're welcome! If you need anything else, I'm here to help. You can always reach our team at ${COMPANY.email} or ${COMPANY.phone}.`,
      actions: [
        { label: "Contact Us", type: "show_form", value: "form" },
        { label: "Our Services", type: "quick_reply", value: "What services do you offer?" },
      ],
    };
  }

  if (includesAny(text, ["bye", "goodbye", "see you"])) {
    return {
      response: `Goodbye! Feel free to come back anytime. For urgent matters, contact us at ${COMPANY.email} or ${COMPANY.phone}. Have a great day!`,
    };
  }

  const matchedServices = findMatchingServices(text);
  if (matchedServices.length === 1) {
    const service = matchedServices[0];
    return {
      response: formatService(service),
      actions: [
        { label: `View ${service.title}`, type: "link", value: service.href },
        { label: "All Services", type: "link", value: COMPANY.servicesPage },
        { label: "Get a quote", type: "show_form", value: "form" },
      ],
      suggestions: ["What other services do you offer?", "I want to contact someone"],
    };
  }

  if (matchedServices.length > 1) {
    return {
      response: `I found a few services that might match your question:\n\n${matchedServices
        .map((service) => `• ${service.title} — ${service.description}`)
        .join("\n\n")}\n\nWhich one would you like to know more about?`,
      actions: matchedServices.slice(0, 3).map((service) => ({
        label: service.title,
        type: "quick_reply" as const,
        value: `Tell me about ${service.title}`,
      })),
    };
  }

  if (
    includesAny(text, ["about", "who are you", "company", "wisematic", "wise matic"])
  ) {
    return {
      response: `${COMPANY.name} — ${COMPANY.tagline}

${COMPANY.description}

We help businesses innovate with technology across AI, data, SaaS, immersive experiences, gaming, marketing, and strategic consulting.

Learn more on our About Us page: ${COMPANY.aboutPage}`,
      actions: [
        { label: "About Us", type: "link", value: COMPANY.aboutPage },
        { label: "Our Services", type: "link", value: COMPANY.servicesPage },
        { label: "Contact Us", type: "show_form", value: "form" },
      ],
    };
  }

  if (includesAny(text, ["career", "careers", "job", "jobs", "hiring", "work with"])) {
    return {
      response: `We're always looking for talented people to join WiseMatic!

Explore open positions on our Careers page: ${COMPANY.careersPage}

For general inquiries, reach us at ${COMPANY.email} or ${COMPANY.phone}.`,
      actions: [
        { label: "View Careers", type: "link", value: COMPANY.careersPage },
        { label: "Contact Us", type: "show_form", value: "form" },
      ],
    };
  }

  if (includesAny(text, ["blog", "blogs", "article", "news"])) {
    return {
      response: `Check out our latest insights and articles on the Blogs page: ${COMPANY.blogsPage}`,
      actions: [{ label: "Read Blogs", type: "link", value: COMPANY.blogsPage }],
    };
  }

  if (
    includesAny(text, [
      "learning",
      "course",
      "training",
      "learning center",
      "education",
    ])
  ) {
    return {
      response: `Visit our Learning Center for courses and educational resources: ${COMPANY.learningCenterPage}`,
      actions: [
        {
          label: "Learning Center",
          type: "link",
          value: COMPANY.learningCenterPage,
        },
      ],
    };
  }

  if (
    includesAny(text, [
      "service",
      "services",
      "offer",
      "offerings",
      "what do you do",
      "what can you",
    ])
  ) {
    return servicesOverviewResponse();
  }

  return {
    response: `I'm not sure I fully understood that, but I'm here to help! Here are some things I can assist with:

• Our services (AI/ML, SaaS, Data Analytics, AR/VR, and more)
• Contact information and connecting you with our team
• Office location and company details
• Careers, blogs, and learning resources

Try asking about a specific service, or let me connect you with our team at ${COMPANY.email}.`,
    actions: [
      { label: "Our Services", type: "quick_reply", value: "What services do you offer?" },
      { label: "Contact Us", type: "show_form", value: "form" },
      { label: "Contact page", type: "link", value: COMPANY.contactPage },
      { label: `Email ${COMPANY.email}`, type: "email", value: COMPANY.email },
    ],
    suggestions: QUICK_SUGGESTIONS,
  };
}
