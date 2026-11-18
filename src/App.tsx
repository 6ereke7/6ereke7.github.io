import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { HomePage } from "@/pages/HomePage";

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
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main id="main-content" className="site-main">
        <Routes>
          <Route path="/" element={<div className="container"><HomePage /></div>} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
