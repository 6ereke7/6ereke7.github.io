import "./Contact.css";
import { uiIcons } from "@/lib/icons";

export function Contact() {
  const GitHubIcon = uiIcons.github;
  const LinkedInIcon = uiIcons.linkedin;
  const EmailIcon = uiIcons.email;
  const DownloadIcon = uiIcons.download;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="section-heading">
        <h2 id="contact-title">Contact</h2>
        <p>
          Interested in working together? Reach out for full-time roles or
          freelance projects.
        </p>
      </div>
      <div className="contact-card card">
        <p className="contact-email">
          <EmailIcon className="icon" aria-hidden="true" focusable="false" />
          <span>
            Email: <a href="mailto:6ereke7@gmail.com">6ereke7@gmail.com</a>
          </span>
        </p>
        <div className="contact-links" role="list">
          <a
            role="listitem"
            href="https://github.com/6ereke7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="icon" aria-hidden="true" focusable="false" />
            <span>GitHub</span>
          </a>
          <a
            role="listitem"
            href="https://linkedin.com/in/6ereke7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="icon" aria-hidden="true" focusable="false" />
            <span>LinkedIn</span>
          </a>
          <a role="listitem" href="/resume.pdf" download>
            <DownloadIcon className="icon" aria-hidden="true" focusable="false" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
