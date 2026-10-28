import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Technology Services: AI, SaaS, AR/VR, Games & Marketing", template: "%s | WiseMatic" },
  description: "Explore WiseMatic's services: AI and machine learning, SaaS and custom software, AR/VR, game development, digital marketing and SEO, and technology consulting.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Technology Services: AI, SaaS, AR/VR, Games & Marketing", description: "Explore WiseMatic's services: AI and machine learning, SaaS and custom software, AR/VR, game development, digital marketing and SEO, and technology consulting.", url: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
