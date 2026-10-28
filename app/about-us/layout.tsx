import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WiseMatic: Toronto AI, Software & Digital Agency",
  description: "Meet WiseMatic, a Toronto technology company helping businesses grow with AI/ML, custom SaaS, AR/VR, game development, digital marketing and technology consulting.",
  alternates: { canonical: "/about-us" },
  openGraph: { title: "About WiseMatic: Toronto AI, Software & Digital Agency", description: "Meet WiseMatic, a Toronto technology company helping businesses grow with AI/ML, custom SaaS, AR/VR, game development, digital marketing and technology consulting.", url: "/about-us" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
