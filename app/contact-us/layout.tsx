import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact WiseMatic: Talk to Our Toronto Team",
  description: "Tell us about your project. WiseMatic's Toronto team replies within one business day about AI, software, AR/VR, games and digital marketing.",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact WiseMatic: Talk to Our Toronto Team", description: "Tell us about your project. WiseMatic's Toronto team replies within one business day about AI, software, AR/VR, games and digital marketing.", url: "/contact-us" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
