"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { BlogGrid } from "./blog-grid";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/lib/utils";
import { ClipLoader } from "react-spinners";

export interface ContentSection {
  type: "subheading" | "text";
  content: string;
  id: string;
}

export interface BlogPost {
  _id: number;
  title: string;
  content: ContentSection[];
  thumbnail: string;
  creationDate: string;
}

export default function BlogsPageHero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogsPosts, setfilteredBlogsPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseURL}/api/blogs/get`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs);
          setfilteredBlogsPosts(data.blogs);
        } else {
          throw new Error(data.error || "Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search term
  useEffect(() => {
    const filteredBlogs = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.some((section) =>
          section.content.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );
    setfilteredBlogsPosts(filteredBlogs);
  }, [searchTerm, blogs]);

  return (
    <Section className="relative overflow-hidden pb-24 sm:pb-32 md:pb-40">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <Glow
          variant="top"
          className="animate-appear-zoom opacity-0 delay-500 w-full max-w-[800px]"
        />
      </div>
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge
            variant="outline"
            className="animate-appear flex items-center space-x-2 px-3 py-1"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
            </span>
            <span className="text-muted-foreground text-lg">Blogs</span>
          </Badge>

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Our{" "}
            <span
              className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
              style={{
                fontFamily:
                  '"Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0em",
                color: "#399AD2",
              }}
            >
              Blogs
            </span>{" "}
            .
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Explore our latest thoughts on technology, design, and business.
          </p>
        </div>
      </div>

      {/*<div className="absolute bottom-0 left-0 right-0 flex justify-center">*/}
      {/*  <Glow variant="bottom" className="animate-appear-zoom opacity-0 delay-1000 w-full max-w-[800px]" />*/}
      {/*</div>*/}
      <div className="space-y-12 mt-12">
        <div className="max-w-2xl mx-auto relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 pl-12 py-6 text-lg rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader size={50} color={"#123abc"} loading={true} />
          </div>
        ) : filteredBlogsPosts.length > 0 ? (
          <BlogGrid posts={filteredBlogsPosts} />
        ) : (
          <p className="text-center text-gray-400">No blogs found.</p>
        )}
      </div>
    </Section>
  );
}
