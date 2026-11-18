import "./Footer.css";
import { uiIcons } from "@/lib/icons";

export function Footer() {
  const year = new Date().getFullYear();
  const GitHubIcon = uiIcons.github;
  const LinkedInIcon = uiIcons.linkedin;
  const EmailIcon = uiIcons.email;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Bereket Tadese</p>
        <nav aria-label="Footer social links">
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/6ereke7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/6ereke7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:6ereke7@gmail.com">
                <EmailIcon
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
