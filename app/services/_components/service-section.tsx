"use client";

import { Section } from "@/components/ui/section";
import React, { memo } from "react";
import {
  Brain,
  LineChart,
  Cpu,
  Network,
  Zap,
  Eye,
  Gamepad2,
} from "lucide-react";
import { GradientServiceCard } from "@/components/cards/gradient-service-card";

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence and machine learning to transform your business with cutting-edge solutions.",
    icon: Brain,
    features: [
      "Deep Learning Solutions",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI Automation",
    ],
    href: "/services/ai-ml",
    color: "text-blue-500",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our comprehensive analytics solutions.",
    icon: LineChart,
    features: [
      "Advanced Analytics",
      "Cloud Integration",
      "Data Engineering",
      "Strategic Architecture",
    ],
    href: "/services/data-analytics",
    color: "text-green-500",
  },
  {
    title: "SaaS Development",
    description:
      "Build scalable, cloud-based software solutions tailored to your business needs.",
    icon: Cpu,
    features: [
      "Custom CRM",
      "Learning Management Systems",
      "AI-driven Chat Bots",
      "Healthcare Management",
    ],
    href: "/services/saas",
    color: "text-purple-500",
  },
  {
    title: "AR & VR SaaS Development",
    description:
      "Create immersive experiences with our cutting-edge augmented and virtual reality solutions.",
    icon: Eye,
    features: [
      "Interactive 3D Environments",
      "AR Product Visualization",
      "VR Training Simulations",
      "Immersive User Experiences",
    ],
    href: "/services/ar-vr",
    color: "text-cyan-500",
  },
  {
    title: "Game Development",
    description:
      "Build engaging and immersive games with our expert development services for multiple platforms and genres.",
    icon: Gamepad2,
    features: [
      "Mobile Game Development",
      "Console & PC Games",
      "Unity & Unreal Engine",
      "Game Design & Optimization",
    ],
    href: "/services/game-dev",
    color: "text-orange-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Drive growth and engagement with data-driven digital marketing strategies.",
    icon: Network,
    features: [
      "SEO Optimization",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Strategy",
    ],
    href: "/services/digital-marketing",
    color: "text-yellow-500",
  },
  {
    title: "Tech Consultation",
    description:
      "Expert guidance for your technology infrastructure and digital transformation journey.",
    icon: Zap,
    features: [
      "Strategic Planning",
      "Digital Transformation",
      "Process Automation",
      "Integration Strategy",
    ],
    href: "/services/tech-consultation",
    color: "text-red-500",
  },
];

const ServiceSectionComponent = () => {
  return (
    <Section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-container relative">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Our Core{" "}
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
              Services
            </span>
            .
          </h2>

          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to transform
            your business through cutting-edge technology and strategic
            innovation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <GradientServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              href={service.href}
              color={service.color}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

// Memoize the component to prevent unnecessary re-renders
const ServiceSection = memo(ServiceSectionComponent);

export default ServiceSection;
