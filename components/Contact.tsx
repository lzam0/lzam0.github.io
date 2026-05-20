const links = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/leihl-zambrano-97607029b/",
  },
  {
    label: "GITHUB",
    href: "https://github.com/lzam0",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-16 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-4">
          04 — CONNECT
        </p>
        <h2 className="font-bebas text-[12vw] md:text-[8vw] lg:text-[6vw] leading-none text-black dark:text-white mb-16">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <p className="font-inter text-base leading-relaxed text-black/52 dark:text-white/52 max-w-sm">
            Open to opportunities, collaborations, and conversations. Let&apos;s
            build something.
          </p>

          <div className="flex flex-col gap-3">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-6 py-4 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-200"
              >
                <span className="font-inter text-sm tracking-[0.2em] text-black/55 dark:text-white/55 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {label}
                </span>
                <span className="text-black/22 dark:text-white/22 group-hover:text-black dark:group-hover:text-white transition-colors text-lg leading-none">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <span className="font-bebas text-2xl tracking-[0.2em] text-black/22 dark:text-white/22">
          LEIHL ZAMBRANO
        </span>
        <p className="font-inter text-xs text-black/18 dark:text-white/18 tracking-[0.15em]">
          © 2026 — DESIGNED & BUILT BY LEIHL ZAMBRANO
        </p>
      </footer>
    </section>
  );
}
