import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-16 bg-white dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading + photo */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-4">
                01 — ABOUT
              </p>
              <h2 className="font-bebas text-[12vw] md:text-[8vw] lg:text-[6vw] leading-none text-black dark:text-white">
                ABOUT
                <br />
                ME
              </h2>
            </div>

            {/* Action photo */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/IMG_8698.JPG"
                alt="Leihl Zambrano calling out on court"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — bio + stats */}
          <div className="space-y-6 lg:pt-24">
            <p className="font-inter text-base leading-relaxed text-black/60 dark:text-white/60">
              I&apos;m{" "}
              <span className="text-black dark:text-white font-medium">
                Leihl Zambrano
              </span>
              , navigating the intersection of computer science and athletic
              discipline. Currently pursuing my{" "}
              <span className="text-black dark:text-white font-medium">
                undergraduate degree in Computer Science
              </span>{" "}
              at the{" "}
              <span className="text-black dark:text-white font-medium">
                University of East Anglia (UEA)
              </span>{" "}
              in Norwich.
            </p>
            <p className="font-inter text-base leading-relaxed text-black/60 dark:text-white/60">
              I bring the same precision and drive to code that I bring to
              volleyball — relentless, focused, always improving. Expected to
              graduate{" "}
              <span className="text-black dark:text-white font-medium">
                Summer 2026
              </span>
              .
            </p>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-black/8 dark:border-white/8">
              {[
                { stat: "7+", label: "PROJECTS" },
                { stat: "10+", label: "SKILLS" },
                { stat: "2026", label: "GRAD YEAR" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-bebas text-4xl text-black dark:text-white">
                    {stat}
                  </p>
                  <p className="font-inter text-[10px] tracking-[0.2em] text-black/30 dark:text-white/30 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
