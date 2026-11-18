import "./Projects.css";
import { projects } from "@/data/projects";
import { getTechIcon, uiIcons } from "@/lib/icons";

const typeLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  "full-stack": "Full-stack",
};

export function Projects() {
  const ExternalIcon = uiIcons.externalLink;
  const GitHubIcon = uiIcons.github;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Projects</h2>
        <p>Selected work across frontend, backend, and full-stack development.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.id}>
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              className="project-image"
              loading="lazy"
              width={800}
              height={450}
            />
            <div className="project-body">
              <div className="project-meta">
                <h3>{project.title}</h3>
                <span className="badge project-type">{typeLabels[project.type]}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => {
                  const Icon = getTechIcon(item);
                  return (
                    <li key={item} className="badge">
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
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalIcon
                      className="icon"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>Live demo</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon
                      className="icon"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>Source code</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
