import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

import { FeaturesSectionWithHoverEffects } from "@/app/_components/feature-section-with-hover-effects";
import React from "react";

export default function FeatureSection() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <Badge variant="outline" className="space-x-2 px-3 py-1">
          <span className="text-muted-foreground text-lg">Features</span>
        </Badge>
        <h1 className="text-center text-2xl text-white -mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl ">
          Why{" "}
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
            WiseMatic
          </span>
          ?
        </h1>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
          Everything you need, Nothing you don&apos;t.
        </p>

        <FeaturesSectionWithHoverEffects />
      </div>
    </Section>
  );
}
