import "./Hero.css";
import { uiIcons } from "@/lib/icons";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const ArrowIcon = uiIcons.arrowRight;

  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <p className="hero-eyebrow">Bereket Tadese</p>
      <h1 id="hero-title">
        Full-stack developer crafting fast, user-focused apps for teams and
        clients.
      </h1>
      <p className="hero-role">Full-stack developer</p>
      <p className="hero-intro">
        I design and build web applications across frontend and backend, helping
        teams ship reliable products and helping clients turn ideas into usable
        software.
      </p>
      <div className="hero-actions">
        <button
          type="button"
          className="accent"
          onClick={() => scrollToSection("projects")}
        >
          <span>View projects</span>
          <ArrowIcon className="icon" aria-hidden="true" focusable="false" />
        </button>
        <button type="button" onClick={() => scrollToSection("contact")}>
          <span>Contact me</span>
          <ArrowIcon className="icon" aria-hidden="true" focusable="false" />
        </button>
      </div>
    </section>
  );
}
