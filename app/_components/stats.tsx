"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function LandingPageStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-transparent px-4 py-8 text-foreground sm:py-24 md:py-16 lg:pt-0 lg:pb-20"
    >
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              {inView && <CountUp end={500} duration={2} suffix="+" />}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              {inView && <CountUp end={98} duration={2} suffix="%" />}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Client Retention Rate
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              {inView && <CountUp end={10} duration={2} suffix="x" />}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Faster Implementation Time
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              {inView && <CountUp end={85} duration={2} suffix="%" />}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Clients Achieved ROI in 6 Months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
