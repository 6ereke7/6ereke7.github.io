import type React from "react";

export type BlogSection = string | React.ReactNode;
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  coverImage?: string;
  content: BlogSection[];
  author: string;
  createdAt: Date;
  updatedAt?: Date;
};
