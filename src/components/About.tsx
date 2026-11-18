import "./About.css";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-content card">
        <p>
          I’m a full-stack developer who builds practical, user-focused web
          applications—from responsive interfaces to APIs and data-backed
          services. I enjoy turning requirements into clear, maintainable
          solutions that help teams move faster and give clients reliable
          results.
        </p>
        <p className="availability-note">
          <strong>Available for freelance projects</strong> and open to
          full-time opportunities.
        </p>
      </div>
    </section>
  );
}
