export const COMPANY = {
  name: "WiseMatic",
  tagline: "Wise and Stellar",
  description:
    "WiseMatic is a technology company that transforms ideas into digital reality through AI, data analytics, SaaS, AR/VR, game development, digital marketing, and tech consultation.",
  email: "info@wisematic.ca",
  salesEmail: "sales@wisematic.ca",
  phone: "(+1) 437-600-3669",
  phoneTel: "+14376003669",
  address: "401, 180 Duncan Mills Road, Toronto, ON, M3B 1Z6",
  contactPage: "/contact-us",
  servicesPage: "/services",
  aboutPage: "/about-us",
  careersPage: "/careers",
  blogsPage: "/blogs",
  learningCenterPage: "/learning-center",
} as const;

export type ServiceInfo = {
  title: string;
  slug: string;
  href: string;
  description: string;
  features: string[];
  keywords: string[];
};

export const SERVICES: ServiceInfo[] = [
  {
    title: "AI & Machine Learning",
    slug: "ai-ml",
    href: "/services/ai-ml",
    description:
      "Harness artificial intelligence and machine learning to transform your business with cutting-edge solutions.",
    features: [
      "Deep Learning Solutions",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI Automation",
    ],
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "deep learning",
      "nlp",
      "automation",
      "predictive",
    ],
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    href: "/services/data-analytics",
    description:
      "Transform raw data into actionable insights with comprehensive analytics solutions.",
    features: [
      "Advanced Analytics",
      "Cloud Integration",
      "Data Engineering",
      "Strategic Architecture",
    ],
    keywords: [
      "data",
      "analytics",
      "insights",
      "bi",
      "business intelligence",
      "data engineering",
      "reporting",
    ],
  },
  {
    title: "SaaS Development",
    slug: "saas",
    href: "/services/saas",
    description:
      "Build scalable, cloud-based software solutions tailored to your business needs.",
    features: [
      "Custom CRM",
      "Learning Management Systems",
      "AI-driven Chat Bots",
      "Healthcare Management",
    ],
    keywords: [
      "saas",
      "software",
      "crm",
      "lms",
      "cloud",
      "platform",
      "application",
      "web app",
    ],
  },
  {
    title: "AR & VR SaaS Development",
    slug: "ar-vr",
    href: "/services/ar-vr",
    description:
      "Create immersive experiences with augmented and virtual reality solutions.",
    features: [
      "Interactive 3D Environments",
      "AR Product Visualization",
      "VR Training Simulations",
      "Immersive User Experiences",
    ],
    keywords: [
      "ar",
      "vr",
      "augmented reality",
      "virtual reality",
      "3d",
      "immersive",
      "metaverse",
    ],
  },
  {
    title: "Game Development",
    slug: "game-dev",
    href: "/services/game-dev",
    description:
      "Build engaging and immersive games for multiple platforms and genres.",
    features: [
      "Mobile Game Development",
      "Console & PC Games",
      "Unity & Unreal Engine",
      "Game Design & Optimization",
    ],
    keywords: [
      "game",
      "gaming",
      "unity",
      "unreal",
      "mobile game",
      "console",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    description:
      "Drive growth and engagement with data-driven digital marketing strategies.",
    features: [
      "SEO Optimization",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Strategy",
    ],
    keywords: [
      "marketing",
      "seo",
      "ppc",
      "social media",
      "advertising",
      "content",
      "digital marketing",
    ],
  },
  {
    title: "Tech Consultation",
    slug: "tech-consultation",
    href: "/services/tech-consultation",
    description:
      "Expert guidance for your technology infrastructure and digital transformation journey.",
    features: [
      "Strategic Planning",
      "Digital Transformation",
      "Process Automation",
      "Integration Strategy",
    ],
    keywords: [
      "consultation",
      "consulting",
      "strategy",
      "transformation",
      "advisory",
      "it consulting",
    ],
  },
];

export const QUICK_SUGGESTIONS = [
  "What services do you offer?",
  "I want to contact someone",
  "Tell me about AI & ML",
  "Where is your office?",
];
