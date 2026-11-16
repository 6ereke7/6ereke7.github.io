import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/types/blog";

export const getBlogBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogs = (): BlogPost[] => {
  return blogPosts;
};

export const getRecentBlogs = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, count);
};
