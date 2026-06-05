import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-transparent px-4 py-8 text-foreground sm:py-24 md:py-16 lg:py-20",
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
