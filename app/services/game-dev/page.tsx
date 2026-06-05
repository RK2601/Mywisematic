import React from "react";
import GameDevServiceHero from "@/app/services/game-dev/_components/hero";
import GameDevPage from "./_components/body";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { BeamsBackground } from "@/components/ui/beams-background";

const GameDevServicePage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <GameDevServiceHero />
        <GameDevPage />
        <Testimonials />
        <Section className="md:px-24 relative overflow-hidden">
          <ContactForm />
        </Section>
      </BeamsBackground>
    </main>
  );
};

export default GameDevServicePage;
