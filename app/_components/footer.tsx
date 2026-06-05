"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
  Phone,
  LucideMailOpen,
  MapPin,
} from "lucide-react";
import { baseURL } from "@/lib/utils";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/newsletters/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setEmail("");
        toast.success("Subscribed successfully! 🎉", {
          description: "Thank you for joining our newsletter.",
        });
      } else {
        console.error("Error subscribing:", data.error);
        toast.error("Subscription failed 😢", {
          description: data.error || "An error occurred while subscribing.",
        });
      }
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Subscription failed 😢", {
        description: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-background/80 text-foreground transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
        {/* Mobile Layout */}
        <div className="grid gap-8 sm:hidden">
          {/* Row 1: Stay Connected */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
                Stay connected
              </h2>
            </div>
            <p className="mb-6 text-muted-foreground text-center">
              Join our newsletter for the latest updates and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="relative w-full max-w-xs">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm border-primary/20 shadow-sm transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-7 w-7 bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
          </div>

          {/* Row 2: Quick Links and Contact Us */}
          <div className="relative grid grid-cols-2 gap-8 pt-6 mt-6 border-t border-primary/10">
            {/* Quick Links Section */}
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3 text-sm">
                <a
                  href="/"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Services
                </a>
                <a
                  href="/about-us"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  About Us
                </a>
                <a
                  href="/careers"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Careers
                </a>
                <a
                  href="/blogs"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Blogs
                </a>
              </nav>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-4 text-sm not-italic text-center">
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-left">
                    401, 180 Duncan Mills Road <br /> Toronto, ON, M3B 1Z6
                  </span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-4 h-4 mr-2 mt-1" />
                  <span>
                    (+1) 647-375-7149 <br /> (+1) 647-491-0988
                  </span>
                </p>
                <p className="flex items-start">
                  <LucideMailOpen className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-left">
                    info@wisematic.ca <br /> sales@wisematic.ca
                  </span>
                </p>
              </address>
            </div>
          </div>
          <div className="relative flex flex-col items-center pt-6 mt-6 border-t border-primary/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
              alt="WiseMatic Logo"
              className="h-48 w-78 object-contain mb-4 drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
            />
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=61572895260460",
                          "_blank",
                        )
                      }
                    >
                      <Facebook className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                    >
                      <Twitter className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/wisematic.inc",
                          "_blank",
                        )
                      }
                    >
                      <Instagram className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/wisematic-inc/",
                          "_blank",
                        )
                      }
                    >
                      <Linkedin className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid gap-8 md:grid-cols-[60%_40%] relative">
          {/* Combined container for Stay Connected, Quick Links, and Contact Us */}
          <div className="grid grid-cols-3 gap-8">
            {/* Stay Connected Section */}
            <div className="relative flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
                  Stay connected
                </h2>
              </div>
              <p className="mb-6 text-muted-foreground text-center">
                Join our newsletter for the latest updates and exclusive offers.
              </p>

              <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-xs"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 backdrop-blur-sm border-primary/20 shadow-sm transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7 bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center md:pl-6">
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3 text-sm">
                <a
                  href="/"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Services
                </a>
                <a
                  href="/about-us"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  About Us
                </a>
                <a
                  href="/careers"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Careers
                </a>
                <a
                  href="/blogs"
                  className="block relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  Blogs
                </a>
              </nav>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-center md:pl-6">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-4 text-sm not-italic text-center">
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-left">
                    401, 180 Duncan Mills Road <br /> Toronto, ON, M3B 1Z6
                  </span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-4 h-4 mr-2 mt-1" />
                  <span>
                    (+1) 647-375-7149 <br /> (+1) 647-491-0988
                  </span>
                </p>
                <p className="flex items-start">
                  <LucideMailOpen className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-left">
                    info@wisematic.ca <br /> sales@wisematic.ca
                  </span>
                </p>
              </address>
            </div>
          </div>

          {/* Logo and Social Icons Section */}
          <div className="relative flex flex-col items-center md:pl-6 md:border-l border-primary/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
              alt="WiseMatic Logo"
              className="h-48 w-78 object-contain mb-4 drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
            />
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=61572895260460",
                          "_blank",
                        )
                      }
                    >
                      <Facebook className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                    >
                      <Twitter className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/wisematic.inc",
                          "_blank",
                        )
                      }
                    >
                      <Instagram className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/wisematic-inc/",
                          "_blank",
                        )
                      }
                    >
                      <Linkedin className="h-4 w-4 text-primary/80 transition-colors hover:text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 WiseMatic Inc. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <a
              href="#"
              className="relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="relative transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
