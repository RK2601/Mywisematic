import {
  Users,
  Zap,
  HeadphonesIcon,
  Paintbrush,
  Eye,
  Smartphone,
  Glasses,
  Gamepad2,
  Building,
  GraduationCap,
  ShoppingBag,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/cards/service-card";

const services = [
  {
    icon: Glasses,
    title: "Virtual Reality Environments",
    description:
      "Immerse your users in fully interactive 3D environments that transform how they experience your products and services.",
    features: [
      "360° Virtual Tours",
      "Interactive Product Demos",
      "Virtual Showrooms",
      "Immersive Storytelling",
    ],
    color: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "Augmented Reality Applications",
    description:
      "Enhance the real world with digital overlays that provide interactive and engaging experiences for your customers.",
    features: [
      "Product Visualization",
      "Interactive Catalogs",
      "AR Navigation",
      "Spatial Computing",
    ],
    color: "text-green-500",
  },
  {
    icon: Gamepad2,
    title: "Interactive Training Simulations",
    description:
      "Train employees more effectively with immersive VR simulations that replicate real-world scenarios in a safe, controlled environment.",
    features: [
      "Skill-based Training",
      "Safety Procedures",
      "Equipment Operation",
      "Emergency Response",
    ],
    color: "text-purple-500",
  },
  {
    icon: Building,
    title: "Architectural Visualization",
    description:
      "Bring architectural designs to life with immersive 3D visualizations that allow clients to experience spaces before they're built.",
    features: [
      "Virtual Walkthroughs",
      "Design Validation",
      "Client Presentations",
      "Collaborative Planning",
    ],
    color: "text-red-500",
  },
  {
    icon: GraduationCap,
    title: "Educational Experiences",
    description:
      "Create engaging educational content that makes learning more interactive, memorable, and effective through immersive technologies.",
    features: [
      "Interactive Learning",
      "Virtual Field Trips",
      "Concept Visualization",
      "Hands-on Simulations",
    ],
    color: "text-yellow-500",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce Solutions",
    description:
      "Enhance the shopping experience with AR try-before-you-buy solutions and immersive product demonstrations.",
    features: [
      "Virtual Try-On",
      "Product Visualization",
      "Interactive Catalogs",
      "Immersive Shopping",
    ],
    color: "text-teal-500",
  },
];

export default function ArVrPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-6 sm:py-12 md:py-20 lg:py-24 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
              <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Our AR & VR{" "}
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
                Leverage our immersive AR & VR solutions to create engaging
                experiences and drive innovation
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                color={service.color}
                showLearnMoreButton={false}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Why Choose Our AR & VR{" "}
              <span
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight whitespace-nowrap w-auto"
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
              ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2">
            <FeatureCard
              icon={<Eye className="h-8 w-8 text-purple-400" />}
              title="Immersive Experiences"
              description="Create memorable, engaging experiences that captivate your audience and leave a lasting impression."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-purple-400" />}
              title="Cutting-Edge Technology"
              description="We leverage the latest AR & VR technologies to ensure your solutions are innovative and future-proof."
            />
            <FeatureCard
              icon={<HeadphonesIcon className="h-8 w-8 text-purple-400" />}
              title="Expert Support"
              description="Our dedicated team of AR & VR specialists provides ongoing support and guidance throughout your project."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-purple-400" />}
              title="Seamless Integration"
              description="Our solutions integrate smoothly with your existing systems and workflows for maximum efficiency."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-purple-400" />}
              title="User-Centered Design"
              description="We prioritize intuitive, accessible experiences that delight users and achieve your business goals."
            />
            <FeatureCard
              icon={<Paintbrush className="h-8 w-8 text-purple-400" />}
              title="Visually Stunning"
              description="Our AR & VR solutions feature high-quality visuals and animations that bring your ideas to life."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
