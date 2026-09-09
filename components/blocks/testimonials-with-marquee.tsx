import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
    role: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  subtitle,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section
      className={cn(
        "bg-transparent text-foreground",
        // "py-12 sm:py-24 md:py-2 px-0",
        "py-12 sm:py-16 md:py-20 px-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <Badge variant="outline" className="space-x-2 px-3 py-1">
            <span className="text-muted-foreground text-lg">Testimonials</span>
          </Badge>
          {/* <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight"> */}
          <h2 className="text-center text-2xl text-white -mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {title}{" "}
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
              {subtitle}
            </span>
            .
          </h2>
          {/* <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl"> */}
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((testimonial, i) => (
              <TestimonialCard key={`row1-${i}`} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((testimonial, i) => (
              <TestimonialCard key={`row2-${i}`} {...testimonial} />
            ))}
          </Marquee>

          {/* Left Shadow */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50 to-transparent" />

          {/* Right Shadow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
