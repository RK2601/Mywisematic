"use client";

import { Section } from "@/components/ui/section";
import React from "react";

import {
  LayoutIcon,
  Workflow,
  ArrowUpRight,
  Network,
  GitMerge,
  FileCheck2,
} from "lucide-react";
import { ServiceCard } from "@/components/cards/service-card";

const services = [
  {
    title: "Strategic Planning & Roadmap",
    description:
      "Develop comprehensive technology strategies aligned with your business goals and growth trajectory.",
    features: [
      "Technology landscape assessment",
      "Infrastructure analysis",
      "ROI-focused planning",
      "Future-proof strategies",
      "Holistic IT environment evaluation",
    ],
    icon: LayoutIcon,
    color: "text-blue-500",
  },
  {
    title: "Digital Transformation",
    description:
      "Guide your organization through digital evolution with proven methodologies and frameworks.",
    features: [
      "Agile implementation",
      "Innovation architecture",
      "Tailored recommendations",
      "Collaborative approach",
      "Strategic advantage planning",
    ],
    icon: ArrowUpRight,
    color: "text-green-500",
  },
  {
    title: "Process Automation",
    description:
      "Streamline operations through intelligent automation and workflow optimization.",
    features: [
      "Business workflow digitization",
      "Implementation strategy",
      "Transition planning",
      "Governance structure setup",
      "Efficiency optimization",
    ],
    icon: Workflow,
    color: "text-purple-500",
  },
  {
    title: "Architecture Assessment",
    description:
      "Evaluate and optimize your technical infrastructure for scalability and efficiency.",
    features: [
      "System capabilities review",
      "Environment analysis",
      "Technology component mapping",
      "Infrastructure optimization",
      "Scalability planning",
    ],
    icon: Network,
    color: "text-yellow-500",
  },
  {
    title: "Integration Strategy",
    description:
      "Design seamless system integrations that enhance operational connectivity.",
    features: [
      "Interface efficiency mapping",
      "Connection protocol design",
      "System compatibility analysis",
      "Integration roadmap development",
      "Technical architecture planning",
    ],
    icon: GitMerge,
    color: "text-red-500",
  },
  {
    title: "Project Management",
    description:
      "Expert oversight ensuring successful delivery of technology initiatives.",
    features: [
      "Waterfall/Agile methodology",
      "Stakeholder satisfaction focus",
      "Business requirements analysis",
      "Design thinking approach",
      "Project lifecycle management",
    ],
    icon: FileCheck2,
    color: "text-blue-500",
  },
];

const ServiceSectionTechConsultation = () => {
  // const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div>
      <Section>
        {/* <div className="mx-auto max-w-container" id='services'> */}

        <div
          className="mx-auto max-w-container pt-4 pb-0 sm:pt-8 sm:pb-0 md:pt-12 md:pb-0 lg:pt-16 lg:pb-0"
          id="services"
        >
          {/* <div className="mx-auto max-w-container pt-2 pb-1 sm:pt-6 sm:pb-3 md:pt-10 md:pb-5 lg:pt-14 lg:pb-7" id="services"> */}

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                color={service.color}
                showLearnMoreButton={false}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceSectionTechConsultation;
