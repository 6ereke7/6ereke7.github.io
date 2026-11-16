import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import Header from "./components/Header";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <main className="container">
        <About />
        <Projects />
        <Blog />
      </main>
    </>
  );
}

export default App;
