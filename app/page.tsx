import LandingPageHero from "@/app/_components/hero";
import LandingPageStats from "@/app/_components/stats";
import { BeamsBackground } from "@/components/ui/beams-background";
import dynamic from "next/dynamic";

// Dynamically import components that are not immediately visible
const FeatureSection = dynamic(() => import("@/app/_components/features"), {
  loading: () => <div className="h-96" />, // Placeholder while loading
  ssr: true,
});

const Services = dynamic(() => import("@/app/_components/services"), {
  loading: () => <div className="h-96" />, // Placeholder while loading
  ssr: true,
});

const Testimonials = dynamic(() => import("@/app/_components/testimonials"), {
  loading: () => <div className="h-96" />, // Placeholder while loading
  ssr: true,
});

const LandingPageFAQ = dynamic(() => import("@/app/_components/faq"), {
  loading: () => <div className="h-64" />, // Placeholder while loading
  ssr: true,
});

const LandingPageCTA = dynamic(() => import("@/app/_components/cta"), {
  loading: () => <div className="h-64" />, // Placeholder while loading
  ssr: true,
});

export default function Home() {
  return (
    <BeamsBackground intensity="subtle" className="bg-transparent">
      <LandingPageHero />
      <LandingPageStats />
      <FeatureSection />
      <Services />
      <Testimonials />
      <LandingPageFAQ />
      <LandingPageCTA />
    </BeamsBackground>
  );
}
