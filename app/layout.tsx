import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";
import React from "react";
import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import ChatSupport from "@/components/ui/chat/chat-support";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wisematic.ca"),
  title: { default: "WiseMatic | AI, Software, AR/VR & Digital Growth", template: "%s | WiseMatic" },
  description:
    "WiseMatic is a Toronto technology company building AI/ML solutions, SaaS, AR/VR, games and digital marketing that help businesses grow.",
  openGraph: { siteName: "WiseMatic", type: "website", locale: "en_CA" },
  twitter: { card: "summary_large_image" },
};


// Who WiseMatic is, for search engines and AI answer engines (GEO).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.wisematic.ca/#organization",
      name: "WiseMatic",
      legalName: "WiseMatic Inc.",
      url: "https://www.wisematic.ca",
      logo: "https://www.wisematic.ca/wisematic.png",
      email: "info@wisematic.ca",
      description:
        "WiseMatic is a Toronto technology company that builds AI and machine learning solutions, SaaS and custom software, AR/VR experiences and games, and provides digital marketing and technology consulting.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "401, 180 Duncan Mills Road",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M3B 1Z6",
        addressCountry: "CA",
      },
      areaServed: ["Canada", "United States"],
      knowsAbout: [
        "Artificial intelligence",
        "Machine learning",
        "SaaS development",
        "Custom software development",
        "Augmented reality",
        "Virtual reality",
        "Game development",
        "Digital marketing",
        "Search engine optimization",
        "Technology consulting",
      ],
      sameAs: [
        "https://www.linkedin.com/company/wisematic-inc/",
        "https://www.instagram.com/wisematic.inc",
        "https://www.facebook.com/profile.php?id=61572895260460",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wisematic.ca/#website",
      url: "https://www.wisematic.ca",
      name: "WiseMatic",
      publisher: { "@id": "https://www.wisematic.ca/#organization" },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-pathname") || "";
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en-CA">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark text-foreground bg-background font-regular`}
      >
        {!isAdminRoute && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        )}
        {!isAdminRoute && <Navbar />}
        {children}
        {!isAdminRoute && <ChatSupport />}
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <Toaster />}
      </body>
    </html>
  );
}
