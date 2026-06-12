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
  title: "WiseMatic",
  description: "Wise and Stellar",
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
