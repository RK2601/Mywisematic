"use client";

import React from "react";
import { Content } from "./_components/content";
import { Features } from "./_components/features";
import DataAnalyticsServiceHero from "./_components/hero";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { Section } from "@/components/ui/section";
import { BeamsBackground } from "@/components/ui/beams-background";

const DataAnalyticsPage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <div className="relative">
          <DataAnalyticsServiceHero />
          <Features />
          <Content />
          <Testimonials />
          <Section className="md:px-24 relative overflow-hidden">
            <ContactForm />
          </Section>
        </div>
      </BeamsBackground>
    </main>
  );
};

export default DataAnalyticsPage;
