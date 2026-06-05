import React from "react";

import TechConsultationServiceHero from "./_components/hero";
import ServiceSectionTechConsultation from "./_components/service-section";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { ContactForm } from "../_components/contact-form";
import { BeamsBackground } from "@/components/ui/beams-background";

const TechConsultationServicePage: React.FC = () => {
  return (
    <BeamsBackground intensity="subtle" className="bg-transparent">
      <TechConsultationServiceHero />
      <ServiceSectionTechConsultation />
      <Testimonials />
      <Section className="md:px-24 relative overflow-hidden">
        <ContactForm />
      </Section>
    </BeamsBackground>
  );
};

export default TechConsultationServicePage;
