import React from "react";
import ArVrServiceHero from "@/app/services/ar-vr/_components/hero";
import ArVrPage from "./_components/body";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { BeamsBackground } from "@/components/ui/beams-background";

const ArVrServicePage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <ArVrServiceHero />
        <ArVrPage />
        <Testimonials />
        <Section className="md:px-24 relative overflow-hidden">
          <ContactForm />
        </Section>
      </BeamsBackground>
    </main>
  );
};

export default ArVrServicePage;
