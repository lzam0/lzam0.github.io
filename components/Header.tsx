"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "fun", href: "/fun" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-display font-bold text-lg tracking-[-0.01em]">
          leihl<span className="text-sky-500">.</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map(({ label, href }) => {
            const active = (pathname.replace(/\/$/, "") || "/") === href;
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`px-2 sm:px-3 py-2 text-sm rounded-full transition-colors ${
                  active
                    ? "text-ink bg-sky-100"
                    : "text-ink/70 hover:text-ink hover:bg-sky-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
