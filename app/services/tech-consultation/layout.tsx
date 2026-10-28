import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting Services in Toronto",
  description: "Independent technology consulting from WiseMatic: project scoping, architecture reviews, security assessments, cloud cost optimisation and build-vs-buy advice.",
  alternates: { canonical: "/services/tech-consultation" },
  openGraph: { title: "Technology Consulting Services in Toronto", description: "Independent technology consulting from WiseMatic: project scoping, architecture reviews, security assessments, cloud cost optimisation and build-vs-buy advice.", url: "/services/tech-consultation" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Technology Consulting Services", "serviceType": "Technology consulting", "description": "Independent technology consulting from WiseMatic: project scoping, architecture reviews, security assessments, cloud cost optimisation and build-vs-buy advice.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/tech-consultation"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
