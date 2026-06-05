"use client";

import React from "react";
import { HeroSection } from "@/app/services/digital-marketing/_components/hero";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap } from "lucide-react";
import { ServiceCard } from "@/components/cards/service-card";
import { ContactForm } from "@/app/services/_components/contact-form";
import Testimonials from "@/app/_components/testimonials";
import { BeamsBackground } from "@/components/ui/beams-background";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Dominate search rankings and drive organic growth with our data-driven SEO strategies.",
    features: [
      "AI-Powered Keyword Research",
      "Technical SEO Optimization",
      "Content Gap Analysis",
      "Local SEO Dominance",
    ],
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize ROI with precision-targeted advertising campaigns across multiple platforms.",
    features: [
      "Smart Bidding Strategies",
      "Real-time Analytics",
      "A/B Testing",
      "Cross-platform Optimization",
    ],
    icon: Zap,
    color: "text-green-500",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build authentic connections and drive engagement with strategic social media campaigns.",
    features: [
      "Viral Content Creation",
      "Community Management",
      "Influencer Partnerships",
      "Social Analytics",
    ],
    icon: Users,
    color: "text-purple-500",
  },
];

function DigitalMarketingServicePage() {
  return (
    <BeamsBackground intensity="subtle" className="bg-transparent">
      <div className="relative overflow-hidden">
        <HeroSection />

        <Section className="py-2">
          <div className="max-w-container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 space-x-2 px-3 py-1">
                <span className="text-muted-foreground text-lg">
                  Our Services
                </span>
              </Badge>
              <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full">
                <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Transform Your{" "}
                  <span
                    className="text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
                    style={{
                      fontFamily:
                        '"Instrument Serif", "Instrument Serif Placeholder", serif',
                      fontStyle: "italic",
                      fontWeight: 400,
                      letterSpacing: "0em",
                      color: "#399AD2",
                    }}
                  >
                    Digital Presence
                  </span>
                  .
                </h2>
                <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
                  Leverage our data-driven technology solutions to achieve
                  unprecedented growth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon}
                  color={service.color}
                  showLearnMoreButton={false}
                />
              ))}
            </div>
          </div>
        </Section>

        <Testimonials />
        <Section className="md:px-24">
          <ContactForm />
        </Section>
      </div>
    </BeamsBackground>
  );
}

export default DigitalMarketingServicePage;
