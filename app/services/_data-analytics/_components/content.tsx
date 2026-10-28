"use client";

import { Section } from "@/components/ui/section";
import {
  IconCloudComputing,
  IconBolt,
  IconChartInfographic,
} from "@tabler/icons-react";

export const Content = () => {
  const contentSections = [
    {
      title: "Cloud Data Integration",
      description:
        "Create robust cloud data pipelines across Azure and AWS, enabling seamless integration of on-premises and cloud-based data sources.",
      icon: IconCloudComputing,
      color: "text-blue-500",
    },
    {
      title: "Data Engineering Excellence",
      description:
        "Design efficient data pipelines using advanced technologies to cleanse, transform, and enrich data for optimal performance.",
      icon: IconBolt,
      color: "text-yellow-500",
    },
    {
      title: "Interactive Analytics",
      description:
        "Develop dynamic dashboards and visualizations that unlock your data's potential, providing clear, actionable insights.",
      icon: IconChartInfographic,
      color: "text-green-500",
    },
  ];

  return (
    <Section className="relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
            </div> */}

      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-bold mb-4">Comprehensive Analytics Solutions</h2> */}

          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mt-6 sm:mt-8 mb-6 sm:mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Comprehensive Analytics{" "}
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
                Solutions
              </span>
              .
            </h2>

            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Transform your business with our cutting-edge data analytics
              services.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contentSections.map((section) => (
            <div
              key={section.title}
              className="
                                group border border-muted/20 rounded-2xl p-8
                                hover:border-foreground/30 transition-all 
                                hover:shadow-lg hover:-translate-y-2
                                relative overflow-hidden
                            "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

              <div className="relative">
                <div
                  className={`mb-6 transform group-hover:scale-110 transition-transform ${section.color}`}
                >
                  <section.icon className="h-12 w-12 opacity-80 group-hover:opacity-100 transition-all" />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
