"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
// import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  // ArrowRight,
  BarChart3,
  Brain,
  Cpu,
  LineChart,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";
import { IconRobot } from "@tabler/icons-react";
// import { color } from "framer-motion";
import { ServiceCard } from "@/components/cards/service-card";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Deep Learning Solutions",
    description:
      "Leverage the power of neural networks to solve complex problems and uncover hidden patterns in your data.",
    features: [
      "Custom Neural Network Architecture",
      "Transfer Learning Implementation",
      "Computer Vision & Image Recognition",
      "Natural Language Understanding",
    ],
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Machine Learning Engineering",
    description:
      "Build end-to-end machine learning solutions that drive business value and automate decision-making processes.",
    features: [
      "Predictive Analytics Models",
      "Automated Decision Systems",
      "Feature Engineering & Selection",
      "Model Deployment & Scaling",
    ],
    icon: Cpu,
    color: "text-green-500",
  },
  {
    title: "Natural Language Processing",
    description:
      "Unlock the potential of textual data with our advanced NLP solutions and language understanding models.",
    features: [
      "Text Classification & Sentiment Analysis",
      "Named Entity Recognition (NER)",
      "Machine Translation Systems",
      "Chatbot & Conversational AI Development",
    ],
    icon: Network,
    color: "text-purple-500",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness the power of data-driven insights to make informed decisions and forecast future trends.",
    features: [
      "Time Series Analysis & Forecasting",
      "Customer Churn Prediction",
      "Demand Forecasting",
      "Risk Assessment Models",
    ],
    icon: LineChart,
    color: "text-yellow-500",
  },
  {
    title: "AI Automation",
    description:
      "Streamline your business processes with intelligent automation solutions powered by AI and machine learning.",
    features: [
      "Robotic Process Automation (RPA)",
      "Intelligent Document Processing",
      "AI-Powered Workflow Optimization",
      "Automated Quality Control Systems",
    ],
    icon: IconRobot,
    color: "text-red-500",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Tailored AI solutions designed to address your unique business challenges and drive innovation.",
    features: [
      "AI Strategy Consulting",
      "Custom Model Development",
      "AI Integration Services",
      "Proof of Concept (PoC) Development",
    ],
    icon: Sparkles,
    color: "text-teal-500",
  },
];

export default function AIMLServiceHero() {
  // function ServiceCard({ icon, title, description, features }:{
  //   icon: React.ReactNode;
  //   title: string;
  //   description: string;
  //   features: string[];
  // }) {
  //   return (
  //     <BackgroundGradient className="rounded-[22px] h-full p-6 bg-white dark:bg-zinc-900 hover:scale-105 transition-transform duration-300">
  //       <div className="flex flex-col h-full">
  //         <div className="flex-grow space-y-4">
  //           <div className="transform transition-transform hover:scale-110 duration-300">
  //             {icon}
  //           </div>
  //           <h3 className="text-2xl font-bold text-black dark:text-white">{title}</h3>
  //           <p className="text-sm text-neutral-600 dark:text-neutral-400 min-h-[60px]">{description}</p>
  //         </div>
  //         <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
  //           <ul className="space-y-3">
  //             {features.map((feature, index) => (
  //               <li key={index} className="flex items-center group">
  //                 <ArrowRight className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 transition-transform group-hover:translate-x-1 duration-300" />
  //                 <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </BackgroundGradient>
  //   );
  // }

  function FeatureCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 group glow-effect p-6 hover:scale-105">
        <div className="flex flex-col h-full space-y-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 transform transition-transform hover:scale-110 duration-300">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
            {description}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Section className="relative overflow-hidden">
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
              AI & Machine Learning Solutions
            </span>
          </Badge>

          {/* <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            AI driven solutions to business growth
          </h1> */}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            AI driven solutions to business{" "}
            <span
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
              growth
            </span>{" "}
            .
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Harness the power of artificial intelligence and machine learning to
            transform your business with our cutting-edge solutions and expert
            services.
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <Button variant="default" size="lg" asChild>
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-0 sm:py-0 md:py-6 lg:py-32 mt-8 sm:mt-12">
        <div className="container mx-auto">
          {/* <h2 className=" pt-20 text-4xl md:text-4xl font-bold text-center mb-4">Our AI & ML Services</h2> */}

          {/* <h2 className="text-center text-2xl font-semibold text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Our AI & ML{" "}
            <span
              className="text-2xl font-semibold text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
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
              Services
            </span>
            .
          </h2>

          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leverage our data-driven digital marketing solutions to achieve unprecedented growth
            </p> */}

          {/* <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            Transform your business with our comprehensive suite of AI and ML
            solutions
          </p>  */}

          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mt-12 mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Our AI & ML{" "}
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
              Transform your business with our comprehensive suite of AI and ML
              solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                features={service.features}
                color={service.color}
                showLearnMoreButton={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Why Choose Our AI & ML{" "}
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
              ?
            </h2>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
              Experience the difference with our expert team and cutting-edge
              solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-purple-400" />}
              title="Data-Driven Approach"
              description="We leverage your data assets to create AI solutions that deliver measurable business value and ROI."
            />

            <FeatureCard
              icon={<Zap className="h-8 w-8 text-purple-400" />}
              title="Rapid Prototyping"
              description="Our agile methodology allows for quick iterations and faster time-to-market for your AI initiatives."
            />

            <FeatureCard
              icon={<Cpu className="h-8 w-8 text-purple-400" />}
              title="Cutting-Edge Technology"
              description="We stay at the forefront of AI advancements, utilizing the latest tools and frameworks in our solutions."
            />

            <FeatureCard
              icon={<Network className="h-8 w-8 text-purple-400" />}
              title="Scalable Solutions"
              description="Our AI systems are designed to grow with your business, from proof of concept to enterprise-wide deployment."
            />

            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-400" />}
              title="Expert Team"
              description="Our team of AI specialists, data scientists, and engineers brings deep expertise to every project."
            />

            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-purple-400" />}
              title="Continuous Innovation"
              description="We're committed to pushing the boundaries of what's possible with AI, constantly exploring new applications and techniques."
            />
          </div>
        </div>
      </section>
    </Section>
  );
}
