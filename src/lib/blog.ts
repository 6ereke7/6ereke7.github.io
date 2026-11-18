import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/types/blog";

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogs = (): BlogPost[] => {
  return [...blogPosts].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
};

export const getRecentBlogs = (count: number = 3): BlogPost[] => {
  return getAllBlogs().slice(0, count);
};

export const getReadingTimeMinutes = (post: BlogPost): number => {
  const text = post.content
    .map((section) => (typeof section === "string" ? section : ""))
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};
