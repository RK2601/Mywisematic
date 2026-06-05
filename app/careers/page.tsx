import React from "react";
import CareersPageHero from "@/app/careers/_components/hero";
import CareerCardsSection from "@/app/careers/_components/career-card-section";
import { BeamsBackground } from "@/components/ui/beams-background";

const CareersPage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <CareersPageHero />
        <CareerCardsSection />
      </BeamsBackground>
    </main>
  );
};

export default CareersPage;
