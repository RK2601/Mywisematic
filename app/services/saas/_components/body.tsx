import {
  Users,
  Zap,
  HeadphonesIcon,
  Paintbrush,
  MessagesSquare,
  Utensils,
  Mail,
  Stethoscope,
  // ArrowRight,
  BarChart3,
  Shield,
} from "lucide-react";
//   import { Button } from "@/components/ui/button"
import {
  Card,
  // CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
//   import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
import { ServiceCard } from "@/components/cards/service-card";

const services = [
  {
    icon: Users,
    title: "Custom CRM",
    description:
      "Streamline your sales and customer relationships with our custom CRM. Manage your sales pipeline, track customer interactions, and improve customer satisfaction.",
    features: [
      "Lead scoring",
      "Contact management",
      "Sales forecasting",
      "Pipeline visualization",
    ],
    color: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Learning Management System",
    description:
      "Deliver engaging and effective training with our Learning Management System. Create, manage, and deliver online courses and training programs.",
    features: [
      "Course authoring",
      "Learner management",
      "Progress tracking",
      "Customizable reporting",
    ],
    color: "text-green-500",
  },
  {
    icon: MessagesSquare,
    title: "AI-driven Custom Chat Bot",
    description:
      "Enhance customer experience with our AI-driven chat bot. Provide 24/7 customer support with natural language processing and machine learning capabilities.",
    features: [
      "Natural language processing",
      "Machine learning integration",
      "24/7 customer support",
      "Customizable responses",
    ],
    color: "text-purple-500",
  },
  {
    icon: Utensils,
    title: "Custom Restaurant Management Tools",
    description:
      "Manage your restaurant efficiently with our custom tools. Streamline operations, manage inventory, and improve customer satisfaction.",
    features: [
      "Online ordering system",
      "Table management",
      "Employee scheduling",
      "Inventory tracking",
    ],
    color: "text-red-500",
  },
  {
    icon: Mail,
    title: "Email Marketing Automation and SMM",
    description:
      "Reach your audience and drive results with our email marketing and social media management tools. Create engaging campaigns, track performance, and increase ROI.",
    features: [
      "Email automation",
      "Social media scheduling",
      "Performance analytics",
      "Campaign management",
    ],
    color: "text-yellow-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Management",
    description:
      "Improve patient care and streamline operations with our healthcare management software. Manage patient records, schedule appointments, and improve patient outcomes.",
    features: [
      "Electronic health records",
      "Appointment scheduling",
      "Billing management",
      "Patient portal",
    ],
    color: "text-teal-500",
  },
];

export default function SaasPage() {
  return (
    <div className="min-h-screen">
      {/* Services Grid */}
      {/* <section className="px-4 py-6 md:py-8 mb-8"> */}

      <div className="px-4 py-6 sm:py-12 md:py-20 lg:py-24 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            {/* <Badge variant="outline" className="mb-4 ">Our Services</Badge> */}

            {/* <h2 className="text-4xl md:text-4xl font-bold mb-6 text-center">Our SaaS Solutions</h2> */}

            <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
              <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Our SaaS{" "}
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
                Leverage our SaaS solutions to streamline your operations and
                drive growth
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
      {/* </section> */}

      {/* Why Choose Us Section */}
      <div className="px-4 py-0">
        <div className="container mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose Our SaaS Solutions?
            </h2> */}

          <div className="flex flex-col items-center justify-center text-center px-4 py-0 w-full mb-12">
            <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Why Choose Our SaaS{" "}
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
              icon={<BarChart3 className="h-8 w-8 text-purple-400" />}
              title="Enhanced Productivity"
              description="Our SaaS solutions are designed to streamline your workflows and boost overall productivity."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-purple-400" />}
              title="Cutting-Edge Technology"
              description="We leverage the latest technologies to ensure our solutions are always ahead of the curve."
            />
            <FeatureCard
              icon={<HeadphonesIcon className="h-8 w-8 text-purple-400" />}
              title="24/7 Customer Support"
              description="Our dedicated support team is always ready to assist you, ensuring smooth operations."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-purple-400" />}
              title="Robust Security"
              description="We prioritize the security of your data with state-of-the-art encryption and protection measures."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-purple-400" />}
              title="Scalable Solutions"
              description="Our SaaS offerings grow with your business, from startup to enterprise-level operations."
            />
            <FeatureCard
              icon={<Paintbrush className="h-8 w-8 text-purple-400" />}
              title="Customizable Interface"
              description="Tailor the look and feel of our solutions to match your brand and specific needs."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// function ServiceCard({ icon, title, description, features }:{
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   features: string[];
// }) {
//   return (
//     <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 group glow-effect hover:scale-105">
//       <CardHeader>
//         {icon}
//         <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
//           {title}
//         </CardTitle>
//         <CardDescription className="text-gray-400">{description}</CardDescription>
//       </CardHeader>
//       <CardContent className="text-gray-300">
//         <ul className="space-y-2">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center">
//               <ArrowRight className="h-4 w-4 text-purple-400 mr-2" />
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   )
// }

//   function FeatureCard({ icon, title, description }) {
//     return (
//       <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 group glow-effect">
//         <CardHeader>
//           <div className="flex items-center space-x-4 ">
//             {icon}
//             <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
//               {title}
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <CardDescription className="text-gray-400">{description}</CardDescription>
//         </CardContent>
//       </Card>
//     )
//   }
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
