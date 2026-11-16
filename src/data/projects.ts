import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "hotela",
    title: "Hotela",
    description:
      "A hotel booking and reservation system with real-time availability tracking.",
    imageUrl: new URL("/images/hotela.png", import.meta.url),
    link: new URL("https://hotela.com"),
    repo: new URL("https://github.com/username/hotela"),
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    tags: ["Hotel", "Booking", "Reservation"],
  },
  {
    id: "bus-transit",
    title: "Bus Transit",
    description:
      "A comprehensive bus transportation management system with route optimization and ticketing services.",
    imageUrl: new URL("/images/bus-transit.png", import.meta.url),
    link: new URL("https://bustransit.com"),
    repo: new URL("https://github.com/username/bus-transit"),
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    tags: ["Transportation", "Bus", "Ticketing"],
  },
];
