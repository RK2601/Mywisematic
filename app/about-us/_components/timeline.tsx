import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const processImages = {
  discovery: [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
  ],
  planning: [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  ],
  development: [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop",
  ],
  testing: [
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  ],
};

export function WorkingProcessTimeline() {
  const data = [
    {
      title: "Step 1: Discovery & Ideation",
      content: (
        <div className="space-y-8">
          <p className="text-muted-foreground text-sm md:text-base font-semibold">
            We start by understanding your business needs and brainstorming
            innovative solutions.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <Image
                src={processImages.discovery[0]}
                alt="Discovery meeting"
                width={600}
                height={400}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Discovery Phase
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={processImages.discovery[1]}
                alt="Ideation session"
                width={600}
                height={400}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Ideation Workshop
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Planning & Strategy",
      content: (
        <div className="space-y-8">
          <p className="text-muted-foreground text-sm md:text-base font-semibold">
            Our team develops a comprehensive plan and strategy tailored to your
            specific goals.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <Image
                src={processImages.planning[0]}
                alt="Planning session"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Planning Phase
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={processImages.planning[1]}
                alt="Strategy meeting"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Strategy Session
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Development & Implementation",
      content: (
        <div className="space-y-8">
          <p className="text-muted-foreground text-sm md:text-base font-semibold">
            We bring your solution to life using cutting-edge technologies and
            best practices.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <Image
                src={processImages.development[0]}
                alt="Development process"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Development Phase
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={processImages.development[1]}
                alt="Implementation"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Implementation Phase
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Testing & Refinement",
      content: (
        <div className="space-y-8">
          <p className="text-muted-foreground text-sm md:text-base font-semibold">
            Rigorous testing and refinement ensure the highest quality and
            performance.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <Image
                src={processImages.testing[0]}
                alt="Testing process"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Testing Phase
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={processImages.testing[1]}
                alt="Refinement"
                width={300}
                height={300}
                className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full shadow-lg"
              />
              <p className="text-neutral-300 text-xs md:text-sm text-center">
                Refinement Phase
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto py-12">
      <Timeline data={data} />
    </div>
  );
}
