import type { Metadata } from "next";

// Staff login page: keep it out of search results.
export const metadata: Metadata = {
  title: "Learning Center",
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
