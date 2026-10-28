import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR & VR Development Services in Toronto",
  description: "Augmented and virtual reality experiences from WiseMatic: WebAR product visualisation, VR training simulations and immersive 3D apps for business.",
  alternates: { canonical: "/services/ar-vr" },
  openGraph: { title: "AR & VR Development Services in Toronto", description: "Augmented and virtual reality experiences from WiseMatic: WebAR product visualisation, VR training simulations and immersive 3D apps for business.", url: "/services/ar-vr" },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Service", "name": "AR & VR Development Services", "serviceType": "AR and VR development", "description": "Augmented and virtual reality experiences from WiseMatic: WebAR product visualisation, VR training simulations and immersive 3D apps for business.", "provider": {"@type": "Organization", "name": "WiseMatic", "url": "https://www.wisematic.ca"}, "areaServed": [{"@type": "City", "name": "Toronto"}, {"@type": "Country", "name": "Canada"}], "url": "https://www.wisematic.ca/services/ar-vr"};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
