"use client";

import { useEffect, useState } from "react";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { usePathname } from "next/navigation";
import { baseURL } from "@/lib/utils";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  type: string;
  avatar: string;
  __v: number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSectionDemo() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const pathname = usePathname();

  // Determine the type based on the current route
  const getTypeFromRoute = () => {
    if (pathname === "/") {
      return "landing page";
    } else if (pathname === "/services") {
      return ["saas", "it", "data analytics", "ai & ml", "digital marketing"];
    } else if (pathname === "/services/ai-ml") {
      return "ai & ml";
    } else if (pathname === "/services/digital-marketing") {
      return "digital marketing";
    } else if (pathname === "/services/data-analytics") {
      return "data analytics";
    } else if (pathname === "/services/saas") {
      return "saas";
    } else if (pathname === "/services/tech-consultation") {
      return "it";
    }

    return null;
  };

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseURL}/api/testimonials/get`);
        const data: ApiResponse = await response.json();

        if (data.success) {
          setTestimonials(data.testimonials);
        } else {
          console.error("Failed to fetch testimonials:", data.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Filter testimonials based on the current route
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const types = getTypeFromRoute();
    return types?.includes(testimonial.type.toLowerCase());
  });

  // Map the filtered testimonials to the expected format
  const formattedTestimonials = filteredTestimonials.map((testimonial) => ({
    author: {
      name: testimonial.name,
      avatar: testimonial.avatar,
    },
    role: testimonial.role,
    text: testimonial.content,
  }));

  return (
    <TestimonialsSection
      title="What Our"
      subtitle="Clients Say"
      description="Don't just take our word for it. Here's what industry leaders have to say about our services."
      testimonials={formattedTestimonials}
    />
  );
}
