import { socials } from "./links";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink/40">© 2026 Leihl Zambrano</p>
        <div className="flex gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full text-ink/50 hover:text-sky-700 hover:bg-sky-50 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
