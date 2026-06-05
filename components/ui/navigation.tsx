"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    <img
                      src="/secondary.svg"
                      alt="WiseMatic Logo"
                      className="h-full w-full"
                    />
                    {/*<LaunchUI />*/}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Stellar Services
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We specialize in delivering advanced AI-driven,
                      data-centric, and SaaS solutions tailored to empower
                      businesses in the digital age.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/ai-ml" title="AI & Machine Learning">
                AI-driven solutions to fuel business growth.
              </ListItem>
              <ListItem
                href="/services/data-analytics"
                title="Data Analytics & Insights"
              >
                Turn raw data into actionable business strategies.
              </ListItem>
              <ListItem href="/services/saas" title="SaaS Development">
                Custom web and mobile SaaS solutions for scalable growth.
              </ListItem>
              <ListItem href="/services/ar-vr" title="AR & VR Development">
                Create immersive experiences with cutting-edge AR & VR
                solutions.
              </ListItem>
              <ListItem href="/services/game-dev" title="Game Development">
                Build engaging games and interactive experiences for multiple
                platforms.
              </ListItem>
              <ListItem
                href="/services/digital-marketing"
                title="Digital Marketing & SEO"
              >
                Enhance visibility and drive growth online.
              </ListItem>
              <ListItem
                href="/services/tech-consultation"
                title="IT Infrastructure Management"
              >
                Build and manage robust digital infrastructures.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Careers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
