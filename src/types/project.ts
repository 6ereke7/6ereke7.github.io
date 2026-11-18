export type ProjectType = "frontend" | "backend" | "full-stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  imageUrl: string;
  imageAlt: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}
