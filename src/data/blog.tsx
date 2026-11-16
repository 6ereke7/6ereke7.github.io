import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started",
    title: "Getting Started with Our Platform",
    coverImage: "/images/cover.jpg",
    content: [
      "Welcome to our platform! This post explains how to get started.",
    ],
    author: "Jane Doe",
    createdAt: new Date("2024-01-15T10:00:00Z"),
  },
  {
    id: "2",
    slug: "advanced-features",
    title: "Exploring Advanced Features",
    coverImage: "/images/advanced.jpg",
    content: [
      "In this post, we dive deep into the advanced features of our platform.",
    ],
    author: "John Smith",
    createdAt: new Date("2024-02-20T14:30:00Z"),
    updatedAt: new Date("2024-03-01T09:15:00Z"),
  },
  {
    id: "3",
    slug: "api-integration",
    title: "API Integration Guide",
    coverImage: "/images/api.jpg",
    content: [
      "Learn how to integrate our API with your applications and workflows.",
      <code>GET /api/v1/users</code>,
    ],
    author: "Jane Doe",
    createdAt: new Date("2024-04-05T16:45:00Z"),
  },
];
