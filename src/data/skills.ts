export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "Responsive Design", "Accessibility"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "npm"],
  },
];
