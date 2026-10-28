import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Careers at WiseMatic: Tech, Sales & Marketing Jobs in Toronto", template: "%s | WiseMatic" },
  description: "Join WiseMatic in Toronto. Open roles in sales, marketing, game development and AI engineering at a growing technology company.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers at WiseMatic: Tech, Sales & Marketing Jobs in Toronto", description: "Join WiseMatic in Toronto. Open roles in sales, marketing, game development and AI engineering at a growing technology company.", url: "/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
