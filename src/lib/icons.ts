import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  LuArrowRight,
  LuDownload,
  LuExternalLink,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMoon,
  LuSun,
} from "react-icons/lu";

export const techIconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  npm: SiNpm,
};

export const getTechIcon = (name: string): IconType | undefined =>
  techIconMap[name];

export const uiIcons = {
  github: LuGithub,
  linkedin: LuLinkedin,
  email: LuMail,
  externalLink: LuExternalLink,
  download: LuDownload,
  arrowRight: LuArrowRight,
  moon: LuMoon,
  sun: LuSun,
};
