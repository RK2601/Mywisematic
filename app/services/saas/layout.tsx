import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS & Custom Software Development in Toronto",
  description: "WiseMatic designs and builds SaaS platforms, web apps and custom business software, from MVP to scale, on secure, maintainable foundations you own.",
  alternates: { canonical: "/services/saas" },
  openGraph: { title: "SaaS & Custom Software Development in Toronto", description: "WiseMatic designs and builds SaaS platforms, web apps and custom business software, from MVP to scale, on secure, maintainable foundations you own.", url: "/services/saas" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "SaaS & Custom Software Development", "serviceType": "SaaS and custom software development", "description": "WiseMatic designs and builds SaaS platforms, web apps and custom business software, from MVP to scale, on secure, maintainable foundations you own.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/saas"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
