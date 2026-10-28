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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-pathname") || "";
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark text-foreground bg-background font-regular`}
      >
        {!isAdminRoute && <Navbar />}
        {children}
        {!isAdminRoute && <ChatSupport />}
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <Toaster />}
      </body>
    </html>
  );
}
