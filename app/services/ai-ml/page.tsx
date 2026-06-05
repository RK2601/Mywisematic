import React from "react";
import { Section } from "@/components/ui/section";
import AIMLServiceHero from "@/app/services/ai-ml/_components/hero";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { BeamsBackground } from "@/components/ui/beams-background";

const AIMLServicePage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <AIMLServiceHero />
        <Testimonials />
        <Section className="md:px-24 relative overflow-hidden">
          <ContactForm />
        </Section>
      </BeamsBackground>
    </main>
  );
};

export default AIMLServicePage;
