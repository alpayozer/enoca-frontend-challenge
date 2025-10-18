import React, { useState, useEffect } from "react";
import "./ThemeToggle.scss";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Koyu moda geç" : "Açık moda geç"}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
