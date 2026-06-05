"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";

export default function CTA() {
  return (
    <Section className="group relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-4 sm:gap-6 text-center pt-0 sm:pt-0">
        <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Get In{" "}
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
            Touch
          </span>
          .
        </h2>

        <Button variant="default" size="lg" asChild>
          <a href="/contact-us">Contact Us</a>
        </Button>
      </div>

      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
