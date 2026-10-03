"use client";

import { useEffect } from "react";

export default function Splash() {
  // Once the intro is over, reveals on later client navigations shouldn't wait for it.
  useEffect(() => {
    const t = setTimeout(
      () => document.documentElement.setAttribute("data-loaded", ""),
      2500,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className="splash fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="splash-mark flex flex-col items-center gap-4">
        <span className="font-display font-bold text-3xl tracking-[-0.01em]">
          leihl<span className="text-sky-500">.</span>
        </span>
        <span className="block h-1 w-24 overflow-hidden rounded-full bg-sky-100">
          <span className="splash-bar block h-full w-full rounded-full bg-sky-300" />
        </span>
      </div>
    </div>
  );
}
