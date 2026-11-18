import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "stayflow",
    title: "StayFlow",
    description:
      "Helps small hotels manage room availability and reservations from a single dashboard.",
    type: "full-stack",
    imageUrl: "/images/stayflow.svg",
    imageAlt: "StayFlow booking dashboard preview",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com/stayflow-demo",
    repoUrl: "https://github.com/6ereke7/stayflow",
  },
  {
    id: "transitops",
    title: "TransitOps",
    description:
      "Gives transit operators a clear view of routes, schedules, and ticket sales in real time.",
    type: "backend",
    imageUrl: "/images/transitops.svg",
    imageAlt: "TransitOps route and schedule management preview",
    tech: ["Node.js", "TypeScript", "Express", "MongoDB"],
    liveUrl: "https://example.com/transitops-demo",
    repoUrl: "https://github.com/6ereke7/transitops",
  },
  {
    id: "shopfront",
    title: "ShopFront",
    description:
      "Enables local retailers to showcase products and capture customer inquiries online.",
    type: "frontend",
    imageUrl: "/images/shopfront.svg",
    imageAlt: "ShopFront storefront interface preview",
    tech: ["React", "TypeScript", "Vite"],
    liveUrl: "https://example.com/shopfront-demo",
    repoUrl: "https://github.com/6ereke7/shopfront",
  },
];
