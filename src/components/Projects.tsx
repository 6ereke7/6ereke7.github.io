import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="projects-section">
      {projects.map((project) => (
        <article className="card pop" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link?.toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </article>
      ))}
    </section>
  );
}
