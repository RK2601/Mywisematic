import React from "react";
import BlogsPageHero from "@/app/blogs/_components/hero";
import { BeamsBackground } from "@/components/ui/beams-background";

const BlogsPage: React.FC = () => {
  return (
    <main>
      <BeamsBackground intensity="subtle" className="bg-transparent">
        <BlogsPageHero />
      </BeamsBackground>
    </main>
  );
};

export default BlogsPage;
