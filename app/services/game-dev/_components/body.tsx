import {
  Users,
  Zap,
  HeadphonesIcon,
  Gamepad2,
  Smartphone,
  Monitor,
  Code,
  Layers,
  Trophy,
  Rocket,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/cards/service-card";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Game Development",
    description:
      "Create engaging mobile games for iOS and Android platforms that captivate users and drive revenue through innovative gameplay.",
    features: [
      "Casual & Hyper-casual Games",
      "Puzzle & Strategy Games",
      "AR Mobile Experiences",
      "Cross-platform Development",
    ],
    color: "text-blue-500",
  },
  {
    icon: Monitor,
    title: "PC & Console Games",
    description:
      "Develop immersive gaming experiences for PC and console platforms with cutting-edge graphics and engaging gameplay mechanics.",
    features: [
      "AAA Quality Graphics",
      "Complex Game Systems",
      "Multi-platform Support",
      "Performance Optimization",
    ],
    color: "text-green-500",
  },
  {
    icon: Gamepad2,
    title: "Unity & Unreal Development",
    description:
      "Leverage industry-leading game engines to create visually stunning and highly performant games across multiple platforms.",
    features: [
      "3D & 2D Game Development",
      "Custom Shader Creation",
      "Advanced Physics Systems",
      "Visual Scripting",
    ],
    color: "text-orange-500",
  },
  {
    icon: Code,
    title: "Game Programming",
    description:
      "Expert game programming services to implement complex game mechanics, AI systems, and performance optimization for smooth gameplay.",
    features: [
      "Game Mechanics Implementation",
      "AI & Pathfinding Systems",
      "Multiplayer Networking",
      "Performance Optimization",
    ],
    color: "text-red-500",
  },
  {
    icon: Layers,
    title: "Game Design & Art",
    description:
      "Comprehensive game design and art services to create visually appealing and engaging gaming experiences with memorable characters and worlds.",
    features: [
      "Character & Environment Design",
      "UI/UX for Games",
      "Animation & VFX",
      "Level Design",
    ],
    color: "text-purple-500",
  },
  {
    icon: Trophy,
    title: "Gamification Solutions",
    description:
      "Transform ordinary applications and processes into engaging experiences through gamification techniques that boost user engagement.",
    features: [
      "Reward Systems",
      "Progress Tracking",
      "Leaderboards & Achievements",
      "Interactive Tutorials",
    ],
    color: "text-teal-500",
  },
];

export default function GameDevPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-6 sm:py-12 md:py-20 lg:py-24 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
              <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Our Game Development{" "}
                <span
                  className="text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily:
                      '"Instrument Serif", "Instrument Serif Placeholder", serif',
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "0em",
                    color: "#FF7A00", // Orange color to match the service card
                  }}
                >
                  Services
                </span>
                .
              </h2>

              <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
                Leverage our game development expertise to create engaging,
                immersive, and profitable gaming experiences
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
              Why Choose Our Game Development{" "}
              <span
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight whitespace-nowrap w-auto"
                style={{
                  fontFamily:
                    '"Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "0em",
                  color: "#FF7A00", // Orange color to match the service card
                }}
              >
                Team
              </span>
              ?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2">
            <FeatureCard
              icon={<Gamepad2 className="h-8 w-8 text-orange-400" />}
              title="Industry Expertise"
              description="Our team brings years of experience from AAA studios and successful indie game development projects."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-orange-400" />}
              title="Cutting-Edge Technology"
              description="We leverage the latest game development technologies and techniques to create innovative gaming experiences."
            />
            <FeatureCard
              icon={<HeadphonesIcon className="h-8 w-8 text-orange-400" />}
              title="Dedicated Support"
              description="Our team provides ongoing support and updates to ensure your game continues to engage players long after launch."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-orange-400" />}
              title="Quality Assurance"
              description="Rigorous testing processes ensure your game is polished, bug-free, and delivers a seamless player experience."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-orange-400" />}
              title="Player-Centered Design"
              description="We focus on creating engaging gameplay that keeps players coming back, maximizing retention and monetization."
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-orange-400" />}
              title="Launch & Marketing Support"
              description="Beyond development, we help with successful game launches and marketing strategies to maximize your game's reach."
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
    <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500 transition-all duration-300 group glow-effect p-6 hover:scale-105">
      <div className="flex flex-col h-full space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20 transform transition-transform hover:scale-110 duration-300">
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
