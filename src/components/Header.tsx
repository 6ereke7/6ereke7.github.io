import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { uiIcons } from "@/lib/icons";
import { scrollToSection, setPendingScrollTarget } from "@/lib/scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const ThemeIcon = theme === "dark" ? uiIcons.sun : uiIcons.moon;

  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }
    setPendingScrollTarget(id);
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <Link to="/" className="site-brand" onClick={() => handleNavClick("home")}>
          Bereket Tadese
        </Link>
        <nav aria-label="Primary">
          <ul className="site-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          <ThemeIcon className="icon" aria-hidden="true" focusable="false" />
        </button>
      </div>
    </header>
  );
}
