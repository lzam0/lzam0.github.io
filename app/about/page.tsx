import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { socials } from "@/components/links";

export const metadata: Metadata = {
  title: "About — Leihl Zambrano",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-sky-100 blur-3xl opacity-60"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-12 md:grid-cols-[1fr_1.3fr] items-start">
        <Reveal className="w-full max-w-sm mx-auto md:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-sky-200"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-sky-200/50">
              <Image
                src="/images/main.jpg"
                alt="Leihl passing a volleyball"
                fill
                priority
                className="object-cover object-[30%_40%]"
                sizes="(max-width: 768px) 90vw, 384px"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-medium text-sky-700">About me</p>
            <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl tracking-[-0.01em] leading-[1.05]">
              UEA graduate,
              <br />
              <span className="text-sky-500">volleyball nerd.</span>
            </h1>
          </Reveal>

          <Reveal delay={120} className="mt-8 space-y-4 text-ink/70 leading-relaxed max-w-xl">
            <p>
              I&apos;m a recent Computer Science graduate from the University
              of East Anglia (Class of 2026). I like shipping things people
              actually use, from event platforms to multiplayer games.
            </p>
            <p>
              I&apos;m currently looking for software and computer science
              roles. If you&apos;re hiring, I&apos;d love to hear from you.
            </p>
            <p>
              Outside of code I&apos;m usually on a volleyball court or making
              content as builtbyleihl.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white hover:bg-sky-50 hover:border-sky-300 px-4 py-2.5 text-sm font-medium transition-colors"
              >
                <Icon className="w-4 h-4 text-sky-700" />
                {label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </main>
  );
}
