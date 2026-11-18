import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { consumePendingScrollTarget, scrollToSection } from "@/lib/scroll";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = consumePendingScrollTarget();
    if (target) {
      window.requestAnimationFrame(() => scrollToSection(target));
      return;
    }
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (id) {
        window.requestAnimationFrame(() => scrollToSection(id));
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
