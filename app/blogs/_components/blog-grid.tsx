import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ContentSection {
  type: "subheading" | "text";
  content: string;
  id: string;
}

export interface BlogPost {
  // excerpt: string;
  // category: string;
  // date: string;
  // imageUrl: string;
  // tags: string[];
  _id: number;
  title: string;
  content: ContentSection[];
  thumbnail: string;
  creationDate: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-12 px-2">
      {posts.map((post: BlogPost) => (
        <Card
          key={post._id}
          className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col group"
        >
          <Link href={`/blogs/${post._id}`} className="flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardHeader className="flex-grow relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30"
                >
                  {/* {post.category} */} Blog
                </Badge>
              </div>
              <CardTitle className="text-xl text-white line-clamp-2 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {post.title}
              </CardTitle>
              {/* <p className="text-gray-300 line-clamp-3">{post.text}</p> */}
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.creationDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {/* {post.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-gray-600 text-gray-400 hover:bg-gray-700"
            >
              {tag}
            </Badge>
            ))} */}
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
