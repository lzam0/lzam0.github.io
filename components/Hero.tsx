import Image from "next/image";
import Reveal from "./Reveal";
import { socials } from "./links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-sky-100 blur-3xl opacity-70"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em]">
              <span className="inline-block origin-[70%_70%] animate-wave">
                👋
              </span>{" "}
              Hi there!
              <br />
              I&apos;m <span className="text-sky-500">Leihl Zambrano</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-base sm:text-lg text-ink/60 max-w-md leading-relaxed">
              Computer Science graduate from the University of East Anglia,
              Class of 2026. I build software people actually use and I&apos;m
              looking for my first role in tech.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white hover:bg-sky-50 hover:border-sky-300 px-4 py-2.5 text-sm font-medium transition-colors"
                  >
                    <Icon className="w-4 h-4 text-sky-700" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={180}
          className="relative w-full max-w-sm mx-auto md:ml-auto md:mr-0"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-sky-200"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-sky-200/50">
            <Image
              src="/images/IMG_5133_Original.jpg"
              alt="Leihl Zambrano"
              fill
              priority
              className="object-cover object-[50%_18%] scale-150 origin-[56%_22%]"
              sizes="(max-width: 768px) 90vw, 384px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
