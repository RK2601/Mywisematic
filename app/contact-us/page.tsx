import React from "react";
import ContactUsHero from "@/app/contact-us/_components/hero";
import { BeamsBackground } from "@/components/ui/beams-background";

const ContactUsPage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <ContactUsHero />
      </BeamsBackground>
    </main>
  );
};

export default ContactUsPage;
