import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconDeviceDesktopAnalytics,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconShieldCheck,
} from "@tabler/icons-react";
import React from "react";

export function FeaturesSectionWithHoverEffects() {
  const colors = [
    "text-blue-500",
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
  ];

  const features = [
    {
      title: "Solutions for Everyone",
      description:
        "Whether you’re a startup, SME, or enterprise, we’ve got tailored solutions to meet your unique business needs.",
      icon: <IconEaseInOut className={colors[0]} />,
    },
    {
      title: "Future-Ready Architecture",
      description:
        "Built with the latest technologies to ensure your systems are ready to evolve with tomorrow’s demands.",
      icon: <IconDeviceDesktopAnalytics className={colors[1]} />,
    },
    {
      title: "Security You Can Trust",
      description:
        "Your data and operations are protected with top-notch security protocols, giving you peace of mind.",
      icon: <IconShieldCheck className={colors[2]} />,
    },
    {
      title: "100% Uptime, Always",
      description:
        "Reliability is our priority. We’re built to stay online—no downtime, no interruptions, guaranteed.",
      icon: <IconCloud className={colors[3]} />,
    },
    {
      title: "Unmatched Pricing",
      description:
        "Transparent pricing that works for everyone—no hidden fees, no credit card traps. Just value.",
      icon: <IconCurrencyDollar className={colors[4]} />,
    },
    {
      title: "24/7 Expert Support",
      description:
        "From our human specialists to AI assistants, we’re always here to help—day & night.",
      icon: <IconHelp className={colors[5]} />,
    },
    {
      title: "Risk-Free Guarantee",
      description:
        "Not happy? We’ll work to make things right—or give your money back. No stress, no hassle.",
      icon: <IconAdjustmentsBolt className={colors[6]} />,
    },
    {
      title: "And So Much More",
      description:
        "From innovation to execution, we offer everything your business needs to succeed. Discover the difference.",
      icon: <IconHeart className={colors[7]} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r border-l border-b py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "border-l dark:border-neutral-800",
        index < 4 && "border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
