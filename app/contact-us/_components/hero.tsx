"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { ContactForm } from "@/app/contact-us/_components/contact-form";
import React from "react";

export default function ContactUsHero() {
  return (
    <Section className="relative overflow-hidden pb-24 sm:pb-32 md:pb-40">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <Glow
          variant="top"
          className="animate-appear-zoom opacity-0 delay-500 w-full max-w-[800px]"
        />
      </div>
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge
            variant="outline"
            className="animate-appear flex items-center space-x-2 px-3 py-1"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
            </span>
            <span className="text-muted-foreground text-lg">Get In Touch</span>
          </Badge>

          {/* <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Have a Project in Mind? <br /> Let’s Make It Happen!
          </h1> */}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Have a Project in Mind? <br /> Let’s Make It{" "}
            <span
              className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
              style={{
                fontFamily:
                  '"Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0em",
                // color: "rgb(29, 224, 84)",
                color: "#399AD2",
              }}
            >
              Happen
            </span>{" "}
            .
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Our goal is simple: to help your business grow with solutions that
            truly make a difference.
          </p>
        </div>

        {/* <h1 className="text-3xl font-bold mb-6 text-center px-4 pt-4 pb-1 sm:pt-6 sm:pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          Contact us today and let’s create something amazing together.
        </h1> */}

        <h2 className="text-center text-xl text-white font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight sm:text-xl md:text-2xl lg:text-3xl">
          Contact us today and let’s create something amazing{" "}
          <span
            className="text-center text-xl text-white font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily:
                '"Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "0em",
              // color: "rgb(29, 224, 84)",
              color: "#399AD2",
            }}
          >
            together
          </span>
          .
        </h2>

        {/* <h2 className="text-center text-2xl font-semibold text-white mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
Contact us today and let’s create something amazing{" "}
  <span
    className="text-2xl font-semibold text-white mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
    style={{
      fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif',
      fontStyle: "italic",
      fontWeight: 400,
      letterSpacing: "0em",
      // color: "rgb(29, 224, 84)",
      color: "#399AD2",

    }}
  >
    together
  </span>.
        </h2> */}

        <ContactForm />

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Glow
            variant="bottom"
            className="animate-appear-zoom opacity-0 delay-1000 w-full max-w-[800px]"
          />
        </div>
      </div>
    </Section>
  );
}
