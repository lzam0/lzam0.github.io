"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-bebas text-2xl tracking-widest text-black dark:text-white">
          LZ
        </span>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-inter text-xs tracking-[0.2em] text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
