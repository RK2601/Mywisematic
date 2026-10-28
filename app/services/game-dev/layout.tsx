import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Development Studio in Toronto (Unity & Unreal)",
  description: "WiseMatic builds games, gamified apps and real-time 3D experiences in Unity and Unreal for entertainment, education and enterprise training.",
  alternates: { canonical: "/services/game-dev" },
  openGraph: { title: "Game Development Studio in Toronto (Unity & Unreal)", description: "WiseMatic builds games, gamified apps and real-time 3D experiences in Unity and Unreal for entertainment, education and enterprise training.", url: "/services/game-dev" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Game Development Studio", "serviceType": "Game development", "description": "WiseMatic builds games, gamified apps and real-time 3D experiences in Unity and Unreal for entertainment, education and enterprise training.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/game-dev"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
