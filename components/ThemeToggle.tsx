"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      className="font-inter text-xs tracking-[0.2em] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200 border border-black/15 dark:border-white/15 hover:border-black/50 dark:hover:border-white/50 px-3 py-1.5"
    >
      {isDark ? "LIGHT" : "DARK"}
    </button>
  );
}
