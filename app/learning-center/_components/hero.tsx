"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import React from "react";
import { LoginForm } from "@/app/learning-center/_components/login-form";

export default function LearningCenterHero() {
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
            <span className="text-muted-foreground text-lg">
              Learn and Grow
            </span>
          </Badge>

          {/* <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Exclusively for the WiseMatic Family
          </h1> */}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Exclusively for the WiseMatic{" "}
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
              Family
            </span>{" "}
            .
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Use your official credentials to log in and access our latest
            training programs. Stay ahead in the ever-evolving world of
            technology with updated resources designed to keep you informed,
            skilled, and ready to tackle new challenges.
          </p>
        </div>

        {/* <h1 className="text-3xl font-bold mb-6 text-center italic">
          Empower yourself with knowledge and grow with WiseMatic!
        </h1> */}

        <h2 className="text-center text-2xl font-semibold text-white mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
          Empower yourself with knowledge and grow with{" "}
          <span
            className="text-2xl font-semibold text-white mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
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
            WiseMatic
          </span>
          .
        </h2>

        <LoginForm />

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
