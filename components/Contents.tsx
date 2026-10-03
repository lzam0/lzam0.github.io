"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function Contents({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    // Current section = the last one whose top has passed 30% of the screen.
    // At the very bottom, the last section wins even if it's too short to get there.
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(items[items.length - 1]?.id);

      const line = window.innerHeight * 0.3;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav aria-label="Contents">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink/40">
        Contents
      </p>
      <ol className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1 lg:border-l lg:border-sky-100">
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block text-sm transition-colors rounded-full px-3 py-1.5 border lg:rounded-none lg:border-0 lg:border-l-2 lg:-ml-px lg:py-1.5 lg:pl-4 ${
                  isActive
                    ? "text-sky-700 bg-sky-50 border-sky-200 lg:bg-transparent lg:border-sky-500 font-medium"
                    : "text-ink/60 border-sky-100 hover:text-ink lg:border-transparent"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
