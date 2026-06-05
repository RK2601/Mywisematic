import React from "react";

import ServicesPageHero from "./_components/hero";
import ServiceSection from "./_components/service-section";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function ServicesPage() {
  return (
    <>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <ServicesPageHero />
        <ServiceSection />
        <Testimonials />
        <Section className="md:px-24 relative overflow-hidden">
          <ContactForm />
        </Section>
      </BeamsBackground>
    </>
  );
}
