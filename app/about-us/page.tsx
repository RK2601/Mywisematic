"use client";
import AboutUsHero from "./_components/hero";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function AboutUsPage() {
  return (
    <BeamsBackground intensity="subtle" className="bg-transparent">
      <AboutUsHero />
    </BeamsBackground>
  );
}
