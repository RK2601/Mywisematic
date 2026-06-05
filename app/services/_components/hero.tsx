"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";

export default function ServicesPageHero() {
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
              Stellar Services
            </span>
          </Badge>

          {/* <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Smart Solutions for a Smarter Future
          </h1> */}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Smart Solutions,{" "}
            <span className="whitespace-normal">
              Limitless{" "}
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
                Possibilities
              </span>{" "}
              .
            </span>
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            At WiseMatic, we merge cutting-edge technology with strategic
            insight, empowering businesses to innovate, scale, and succeed in
            the digital age.
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <Button variant="default" size="lg" asChild>
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Glow
          variant="bottom"
          className="animate-appear-zoom opacity-0 delay-1000 w-full max-w-[800px]"
        />
      </div> */}
    </Section>
  );
}
