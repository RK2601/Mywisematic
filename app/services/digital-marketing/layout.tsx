import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services in Toronto",
  description: "Grow with WiseMatic's digital marketing: technical SEO, content, local SEO, paid campaigns and analytics focused on qualified leads, not vanity metrics.",
  alternates: { canonical: "/services/digital-marketing" },
  openGraph: { title: "Digital Marketing & SEO Services in Toronto", description: "Grow with WiseMatic's digital marketing: technical SEO, content, local SEO, paid campaigns and analytics focused on qualified leads, not vanity metrics.", url: "/services/digital-marketing" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "Digital Marketing & SEO Services", "serviceType": "Digital marketing and SEO", "description": "Grow with WiseMatic's digital marketing: technical SEO, content, local SEO, paid campaigns and analytics focused on qualified leads, not vanity metrics.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/digital-marketing"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
