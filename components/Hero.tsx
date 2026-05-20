import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Left — text */}
      <div className="relative flex-1 flex flex-col justify-center px-6 md:px-16 pt-28 pb-16 lg:py-0 overflow-hidden">
        {/* Watermark */}
        <span className="absolute bottom-0 left-0 font-bebas text-[45vw] lg:text-[25vw] leading-none text-black/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
          LZ
        </span>

        <div className="relative z-10 max-w-2xl">
          <p className="font-inter text-xs tracking-[0.35em] text-black/35 dark:text-white/35 mb-6 uppercase">
            Portfolio — 2026
          </p>

          <h1 className="font-bebas leading-[0.85] tracking-tight text-black dark:text-white text-[22vw] md:text-[18vw] lg:text-[12vw]">
            LEIHL
            <br />
            ZAMBRANO
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 items-center">
            {["CS STUDENT", "ATHLETE", "BUILDER"].map((label, i) => (
              <span key={label} className="flex items-center gap-6">
                <span className="font-inter text-xs tracking-[0.25em] text-black/45 dark:text-white/45">
                  {label}
                </span>
                {i < 2 && (
                  <span className="text-black/15 dark:text-white/15">—</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-inter text-xs font-bold tracking-[0.2em] hover:opacity-85 transition-opacity duration-200"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white font-inter text-xs font-bold tracking-[0.2em] hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Scroll cue — mobile only */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden">
          <span className="font-inter text-[10px] tracking-[0.35em] text-black/25 dark:text-white/25">
            SCROLL
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent" />
        </div>
      </div>

      {/* Right — hero photo */}
      <div className="relative lg:w-[42%] lg:min-h-screen lg:sticky lg:top-0 h-72 lg:h-auto shrink-0 overflow-hidden border-l border-black/5 dark:border-white/5">
        <Image
          src="/images/main.jpg"
          alt="Leihl Zambrano — volleyball action"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        {/* Subtle gradient so text on left stays readable at the seam */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent" />
      </div>
    </section>
  );
}
