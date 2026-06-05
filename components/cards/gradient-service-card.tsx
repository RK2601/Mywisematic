"use client";
import React, { useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GradientServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  href: string;
  color: string;
  className?: string;
}

const GradientServiceCardComponent = ({
  title,
  description,
  features,
  icon: Icon,
  href,
  color,
  className = "",
}: GradientServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Extract color code from the color class (e.g., "text-blue-500" -> "#3B82F6")
  const getColorFromClass = (colorClass: string) => {
    const colorMap: Record<string, string> = {
      "text-blue-500": "#3B82F6",
      "text-green-500": "#10B981",
      "text-purple-500": "#8B5CF6",
      "text-cyan-500": "#06B6D4",
      "text-orange-500": "#F97316",
      "text-yellow-500": "#EAB308",
      "text-red-500": "#EF4444",
    };

    return colorMap[colorClass] || "#8B5CF6"; // Default to purple if not found
  };

  const primaryColor = getColorFromClass(color);

  // Handle mouse movement for 3D effect - optimized with debounce
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // Only update every other mouse move event to reduce calculations
    if (e.nativeEvent.timeStamp % 2 === 0) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (reduced range for better performance)
      const rotateX = -(y / rect.height) * 3; // Max 3 degrees rotation
      const rotateY = (x / rect.width) * 3; // Max 3 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Link href={href} className={className}>
      <div className="w-full h-full">
        {/* Card container with realistic 3D effect */}
        <motion.div
          ref={cardRef}
          className="relative rounded-[12px] overflow-hidden h-full"
          // style={{
          //   transformStyle: "preserve-3d",
          //   backgroundColor: "rgba(14, 19, 31, 0.50)",
          //   boxShadow:
          //     "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)"
          // }}
          style={{
            /* Simplified background with reduced effects */
            background: "rgba(255, 255, 255, 0.08)",

            /* Reduced blur intensity */
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            /* Simplified box shadow */
            boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.3)",

            /* Preserve the 3D transform support */
            transformStyle: "preserve-3d",
          }}
          initial={{ y: 0 }}
          animate={{
            y: isHovered ? -5 : 0,
            rotateX: rotation.x,
            rotateY: rotation.y,
            perspective: 1000,
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.2,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle glass reflection overlay - simplified */}
          <div
            className="absolute inset-0 z-35 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
              opacity: 0.6,
            }}
          />

          {/* Dark background with black gradient */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
            }}
            animate={{
              z: -1,
            }}
          />

          {/* Simplified texture overlay - combined noise and smudge effects */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay z-10 pointer-events-none"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />

          {/* Simplified combined glow effect */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
            style={{
              background: `
                radial-gradient(ellipse at bottom center, ${primaryColor}B3 -10%, rgba(79, 70, 229, 0) 70%)
              `,
              filter: "blur(30px)",
              opacity: 0.8,
            }}
          />

          {/* Simplified bottom border glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
              boxShadow: `0 0 15px 3px ${primaryColor}CC`,
              opacity: 0.9,
            }}
          />

          {/* Card content */}
          <motion.div
            className="relative flex flex-col h-full p-8 z-40"
            animate={{
              z: 2,
            }}
          >
            {/* Header with icon and title side by side */}
            <div className="flex items-center mb-5">
              {/* Icon circle with shadow */}
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
                  position: "relative",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0.9 }}
                animate={{
                  opacity: 1,
                  boxShadow: isHovered
                    ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
                    : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
                  z: isHovered ? 10 : 5,
                  y: isHovered ? -1 : 0,
                  rotateX: isHovered ? -rotation.x * 0.5 : 0,
                  rotateY: isHovered ? -rotation.y * 0.5 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {/* Top-left highlight for realistic lighting */}
                <div
                  className="absolute top-0 left-0 w-2/3 h-2/3 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)",
                    pointerEvents: "none",
                    filter: "blur(10px)",
                  }}
                />

                {/* Bottom shadow for depth */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 opacity-50"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)",
                    pointerEvents: "none",
                    backdropFilter: "blur(3px)",
                  }}
                />

                {/* Icon */}
                <div className="flex items-center justify-center w-full h-full relative z-10">
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
              </motion.div>

              {/* Title next to icon */}
              <motion.h3
                className="text-2xl font-bold text-white ml-3"
                style={{
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  textRendering: "optimizeLegibility",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textShadow: "0 0 1px rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0.9 }}
                animate={{
                  textShadow: isHovered
                    ? "0 0 1px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.2)"
                    : "0 0 1px rgba(255,255,255,0.1)",
                  opacity: 1,
                  transition: { duration: 0.4 },
                }}
              >
                {title}
              </motion.h3>
            </div>

            {/* Content positioning */}
            <motion.div
              className="mb-auto"
              animate={{
                z: isHovered ? 5 : 2,
                rotateX: isHovered ? -rotation.x * 0.3 : 0,
                rotateY: isHovered ? -rotation.y * 0.3 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <motion.p
                className="text-base mb-5 text-gray-200"
                style={{
                  lineHeight: 1.6,
                  fontWeight: 500,
                  textRendering: "optimizeLegibility",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textShadow: "0 0 1px rgba(255,255,255,0.05)",
                }}
                initial={{ opacity: 0.85 }}
                animate={{
                  textShadow: isHovered
                    ? "0 0 1px rgba(255,255,255,0.05), 0 1px 1px rgba(0,0,0,0.1)"
                    : "0 0 1px rgba(255,255,255,0.05)",
                  opacity: isHovered ? 0.95 : 0.85,
                  transition: { duration: 0.4 },
                }}
              >
                {description}
              </motion.p>

              {/* Features list - simplified */}
              <div className="space-y-2.5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                    style={{
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale",
                    }}
                  >
                    <div
                      className="h-2 w-2 rounded-full mr-3"
                      style={{ backgroundColor: primaryColor }}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Simplified click indicator */}
            <div className="mt-6 flex justify-end">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}99, ${primaryColor}66)`,
                  boxShadow: `0 2px 8px rgba(0,0,0,0.2)`,
                  transform: isHovered ? "translateY(-2px)" : "none",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
};

export const GradientServiceCard = memo(GradientServiceCardComponent);
