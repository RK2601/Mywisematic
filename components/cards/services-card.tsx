import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const ServiceCard = ({
  title,
  description,
  features,
  icon: Icon,
  href,
  color,
  className = "",
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  href: string;
  color: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className={className}>
      <div
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.1] block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <Card
          className="group relative h-full p-8
                bg-white/[0.05] dark:bg-black/[0.05]
                hover:bg-white/[0.1] dark:hover:bg-black/[0.1]
                  backdrop-blur-[12px] backdrop-saturate-[180%]
                  border border-white/20 dark:border-white/10
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]
                  hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]
                  transition-all duration-500 overflow-hidden
                  [transform-style:preserve-3d]
                  before:absolute before:inset-0
                  before:bg-gradient-to-br 
                before:from-white/10 before:via-transparent before:to-transparent
                  before:rounded-[inherit] before:pointer-events-none
                  after:absolute after:inset-0
                  after:bg-gradient-to-br
                  after:from-transparent after:via-transparent after:to-white/10
                  after:rounded-[inherit] after:pointer-events-none"
        >
          {/* Add inner reflections */}
          <div
            className="absolute -left-1/2 -top-1/2 w-[200%] h-[200%] pointer-events-none
                    bg-gradient-to-br from-white/30 via-white/0 to-white/0 rounded-full opacity-0
                    group-hover:opacity-100 duration-500 transform rotate-45 z-0"
          />

          <div className="relative flex flex-col h-full z-10">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="p-3 rounded-xl 
                            bg-white/[0.08] dark:bg-black/[0.08]
                            backdrop-blur-md border border-white/20
                            shadow-inner group-hover:bg-white/[0.12]
                            group-hover:border-white/30 transition-all duration-500"
              >
                <Icon
                  className={`h-8 w-8 ${color} group-hover:scale-110 transition-transform duration-500`}
                />
              </div>
              <h3
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                            from-foreground to-muted-foreground group-hover:from-brand group-hover:to-purple-500 
                            transition-all duration-500"
              >
                {title}
              </h3>
            </div>

            <p className="text-muted-foreground text-sm mb-8 group-hover:text-foreground/80 transition-colors duration-500">
              {description}
            </p>

            <div className="mt-auto space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground 
                                            group-hover:text-foreground/90 transition-colors duration-300"
                  >
                    <div
                      className="h-1.5 w-1.5 rounded-full bg-brand/70 mr-3 
                                            group-hover:bg-brand group-hover:scale-125 transition-all duration-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
};
