"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import { baseURL } from "@/lib/utils";
import { ClipLoader } from "react-spinners"; // Import ClipLoader

interface BlogContent {
  _id: string;
  title: string;
  content: { type: string; content: string }[];
  thumbnail: string;
  type: string;
  creationDate: string;
}

export default function BlogsPage() {
  const params = useParams();
  const blogId = params.blogId; // Ensure blogId is correctly retrieved
  const [blog, setBlog] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
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
        if (data.success && data.blogs) {
          // Find the blog with the matching blogId
          const foundBlog = data.blogs.find(
            (blog: BlogContent) => blog._id === blogId,
          );

          if (foundBlog) {
            setBlog(foundBlog); // Set the blog post data
          } else {
            throw new Error("Blog post not found.");
          }
        } else {
          throw new Error(data.error || "Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to load the blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Blog post not found.</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            {blog.thumbnail ? (
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">
                  No Image Available
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
              <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                {/* <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 ring-white">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Author avatar"
                  />
                </Avatar> */}
                <div>
                  {/* <p className="font-semibold text-base sm:text-xl">John Doe</p> */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm mt-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>
                      {new Date(blog.creationDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight mb-4 sm:mb-6">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg sm:prose-xl max-w-none">
          <div className="rounded-xl p-6 sm:p-8 shadow-lg ring-1 ring-black/5">
            <div className="space-y-6 text-muted-foreground">
              {blog.content?.map((section, index) => (
                <div key={index}>
                  {section.type === "subheading" ? (
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mt-8 mb-4">
                      {section.content}
                    </h2>
                  ) : (
                    <p className="text-lg">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        {/* <div className=" space-y-8 sm:space-y-10 mt-12 sm:mt-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6">
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {blog.type}
              </Badge>
            </div>
          </div>
        </div> */}
      </div>
    </article>
  );
}
