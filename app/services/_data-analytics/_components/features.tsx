import {
  IconAdjustmentsBolt,
  IconCloud,
  IconDeviceDesktopAnalytics,
  IconEaseInOut,
} from "@tabler/icons-react";
import { ServiceCard } from "@/components/cards/service-card";

export const Features = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Transform complex data into actionable insights using cutting-edge analytics tools and methodologies. Implement machine learning models and statistical analysis to uncover trends and patterns in your data.",
      icon: IconDeviceDesktopAnalytics,
      features: [
        "Predictive Analytics",
        "Statistical Modeling",
        "Pattern Recognition",
        "Trend Analysis",
      ],
      color: "text-blue-500",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly connect and manage data across multiple cloud platforms with enterprise-grade security and scalability. Support for real-time data processing and automated workflows.",
      icon: IconCloud,
      features: [
        "Multi-cloud Support",
        "Real-time Processing",
        "Automated Workflows",
        "Security Controls",
      ],
      color: "text-green-500",
    },
    {
      title: "Data Engineering",
      description:
        "Design and implement scalable data pipelines using modern tools and best practices. Ensure data quality, reliability, and performance at every step of the data lifecycle.",
      icon: IconAdjustmentsBolt,
      features: [
        "ETL Pipeline Design",
        "Data Quality",
        "Performance Optimization",
        "Monitoring",
      ],
      color: "text-purple-500",
    },
    {
      title: "Strategic Architecture",
      description:
        "Create comprehensive data strategies aligned with your business objectives. Design scalable architectures that support growth and adapt to changing requirements.",
      icon: IconEaseInOut,
      features: [
        "Solution Design",
        "Scalability Planning",
        "Integration Strategy",
        "Technology Selection",
      ],
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/*
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Analytics Features
          </h2> */}

          {/* <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
            Our Analytics{" "}
            <span
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
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
              Features
            </span>
            .
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlock the power of your data with our comprehensive analytics
            solutions
          </p> */}
          {/* <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-0 sm:py-0 md:py-6 lg:py-32 mt-8 sm:mt-12"> */}

          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mt-0 sm:mt-0 mb-6 sm:mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Our Analytics{" "}
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
                Features
              </span>
              .
            </h2>

            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Unlock the power of your data with our comprehensive analytics
              solutions.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <ServiceCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              features={feature.features}
              color={feature.color}
              showLearnMoreButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
