"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { Card } from "@/components/ui/card";
import { WorkingProcessTimeline } from "./timeline";
import LandingPageCTA from "@/app/_components/cta";
import { Lightbulb, Eye, Rocket } from "lucide-react";

function FeatureCard({
                       title,
                       description,
                       icon
                     }: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card
      className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 group glow-effect p-6 hover:scale-105 z-10">
      <div className="flex flex-col h-full space-y-4">
        <div className="flex justify-center">{icon}</div>
        <h3 className="text-lg font-bold text-black dark:text-white text-center">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow text-center">
          {description}
        </p>
      </div>
    </Card>
  );
}

export default function AboutUsHero() {
  return (
    <Section className="relative overflow-hidden !pb-0">
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
            <span className="text-muted-foreground text-lg">About Us</span>
          </Badge>

          <h2
            className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Transforming Ideas Into{" "}
            <span
              className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
              style={{
                fontFamily:
                  "\"Instrument Serif\", \"Instrument Serif Placeholder\", serif",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0em",
                color: "#399AD2"
              }}
            >
              Impact
            </span>{" "}
            .
          </h2>

          <p
            className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            WiseMatic provides innovative, tailored IT solutions to boost growth
            and efficiency, empowering businesses to thrive in the digital
            landscape with a skilled team and a focus on quality and
            collaboration.
          </p>
        </div>
      </div>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Innovate with Insight"
              description="Harness the power of technology and insight to drive your business forward. Our expertise turns challenges into opportunities."
              icon={<Lightbulb className="text-yellow-500" />}
            />

            <FeatureCard
              title="Empower your vision"
              description="Your vision, our mission. Together, we create solutions that transform ideas into reality and push boundaries."
              icon={<Eye className="text-blue-500" />}
            />

            <FeatureCard
              title="Lead the future"
              description="Stay ahead with forward-thinking strategies and cutting-edge technology. Let’s pioneer the future of your industry."
              icon={<Rocket className="text-red-500" />}
            />
          </div>
        </div>
      </section>

      {/* Working Process */}

      <div className="pt-4 sm:pt-4  md:pt-6 lg:pt-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Our Working{" "}
              <span
                className="text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily:
                    "\"Instrument Serif\", \"Instrument Serif Placeholder\", serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "0em",
                  color: "#399AD2"
                }}
              >
                Process
              </span>
              .
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project delivers
              maximum value. Our proven process combines flexibility with
              precision to achieve outstanding results.
            </p>
          </div>

          <WorkingProcessTimeline />
        </div>
        <LandingPageCTA />
      </div>
    </Section>
  );
}
