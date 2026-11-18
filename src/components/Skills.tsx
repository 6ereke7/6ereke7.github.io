import "./Skills.css";
import { skillGroups } from "@/data/skills";
import { getTechIcon } from "@/lib/icons";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-heading">
        <h2 id="skills-title">Skills</h2>
        <p>Tools and technologies I use to build and ship web products.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="card skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => {
                const Icon = getTechIcon(item);
                return (
                  <li key={item}>
                    {Icon && (
                      <Icon
                        className="icon"
                        aria-hidden="true"
                        focusable="false"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
