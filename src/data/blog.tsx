import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-accessible-react-interfaces",
    title: "Building Accessible React Interfaces from the Start",
    content: [
      "Accessible interfaces are easier for everyone to use, not just people relying on assistive technology. When I start a new React component, I try to begin with semantic HTML, clear labels, and predictable keyboard behavior before adding visual polish.",
      "Small decisions like using native buttons for actions, keeping focus states visible, and structuring headings logically can prevent a lot of rework later. Accessibility works best as a default habit rather than a final checklist.",
    ],
    author: "Bereket Tadese",
    createdAt: new Date("2025-11-10T09:00:00Z"),
  },
  {
    id: "2",
    slug: "designing-practical-rest-apis",
    title: "Designing Practical REST APIs for Small Products",
    content: [
      "A good API should be easy to understand, predictable to consume, and simple to evolve. For small products, I focus on clear resource naming, consistent response shapes, and helpful error messages that make integration smoother for frontend and third-party clients.",
      "It also helps to document the basics early: authentication, common endpoints, and example requests. Even lightweight documentation reduces guesswork and speeds up collaboration.",
      "For example, a simple users endpoint might look like this:",
      <code>GET /api/users/:id</code>,
    ],
    author: "Bereket Tadese",
    createdAt: new Date("2026-01-18T14:30:00Z"),
    updatedAt: new Date("2026-01-22T08:15:00Z"),
  },
  {
    id: "3",
    slug: "from-idea-to-deployed-full-stack-app",
    title: "From Idea to a Deployed Full-Stack App",
    content: [
      "Turning an idea into a working product usually means balancing scope, speed, and maintainability. I like to start with the core user flow, build a thin end-to-end slice, and deploy early so feedback comes from real usage instead of assumptions.",
      "Once the basics are live, it becomes much easier to prioritize improvements: performance, UI refinements, and features that actually solve user problems. A steady, iterative approach keeps both frontend and backend changes manageable.",
    ],
    author: "Bereket Tadese",
    createdAt: new Date("2026-03-05T16:45:00Z"),
  },
];
