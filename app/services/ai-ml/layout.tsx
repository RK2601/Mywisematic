import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning Development Services in Toronto",
  description: "Custom AI solutions from WiseMatic: AI assistants, document automation, RAG and machine learning models built with guardrails, measurable results and data privacy in mind.",
  alternates: { canonical: "/services/ai-ml" },
  openGraph: { title: "AI & Machine Learning Development Services in Toronto", description: "Custom AI solutions from WiseMatic: AI assistants, document automation, RAG and machine learning models built with guardrails, measurable results and data privacy in mind.", url: "/services/ai-ml" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "AI & Machine Learning Development Services", "serviceType": "AI and machine learning development", "description": "Custom AI solutions from WiseMatic: AI assistants, document automation, RAG and machine learning models built with guardrails, measurable results and data privacy in mind.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/ai-ml"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
