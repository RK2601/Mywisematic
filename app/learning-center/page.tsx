import React from "react";
import LearningCenterHero from "@/app/learning-center/_components/hero";
import { BeamsBackground } from "@/components/ui/beams-background";

const LearningCenter: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <LearningCenterHero />
      </BeamsBackground>
    </main>
  );
};

export default LearningCenter;
