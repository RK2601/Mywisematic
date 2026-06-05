import React from "react";
import SaasServiceHero from "@/app/services/saas/_components/hero";
import SaasPage from "./_components/body";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { BeamsBackground } from "@/components/ui/beams-background";

const SaasServicePage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <SaasServiceHero />
        <SaasPage />
        <Testimonials />
        <Section className="md:px-24 relative overflow-hidden">
          <ContactForm />
        </Section>
      </BeamsBackground>
    </main>
  );
};

export default SaasServicePage;
