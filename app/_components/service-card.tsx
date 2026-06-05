import { Card } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

export const ServiceCard = ({
  service,
  isActive,
  onClick,
}: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Card
      className={`p-6 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
        isActive
          ? "border-brand shadow-xl shadow-brand/20"
          : "border-border hover:border-brand/50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl ${isActive ? "bg-brand text-white" : "bg-brand/10 text-brand"} transition-colors duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
      </div>

      <p className="text-muted-foreground mb-6 line-clamp-2">
        {service.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">
          Key Features
        </h4>
        <ul className="space-y-2">
          {service.features.map((feature: string, index: number) => (
            <li
              key={index}
              className="flex items-start text-md text-muted-foreground"
            >
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* <Button className="w-full group" variant={isActive ? 'default' : 'outline'}>
        Learn More
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button> */}
    </Card>
  );
};
