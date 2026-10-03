import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fun — Leihl Zambrano",
};

const photos = [
  "/images/IMG_5094.JPG",
  "/images/DSC08943.JPEG",
  "/images/IMG_8356.JPG",
  "/images/DSC08952.JPEG",
  "/images/IMG_8357.JPG",
  "/images/IMG_8696.JPG",
  "/images/IMG_8358.JPG",
  "/images/IMG_8359.JPG",
  "/images/IMG_8361.JPG",
  "/images/IMG_8698.JPG",
  "/images/IMG_8700.JPG",
  "/images/IMG_8701.JPG",
];

export default function FunPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.01em]">
          When I&apos;m not working
        </h1>
        <div className="mt-5 space-y-4 text-lg text-ink/70 leading-relaxed max-w-2xl">
          <p>
            Outside of work, you can find me on the volleyball courts or
            creating content for my{" "}
            <a
              href="https://www.instagram.com/builtbyleihl/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
            >
              builtbyleihl
            </a>{" "}
            social media pages.
          </p>
          <p>
            I love playing volleyball. It&apos;s a sport that&apos;s stuck
            with me since 2019. On the side, I really enjoy watching anime and
            going to the gym to stay fit.
          </p>
        </div>
      </Reveal>

      <div className="mt-10">
        <Gallery photos={photos} />
      </div>

      <Reveal className="mt-16 text-center">
        <p className="font-display font-semibold text-2xl sm:text-3xl">
          Thanks for stopping by. If you see me on court, come say hi{" "}
          <span aria-hidden>👋</span>
        </p>
      </Reveal>
    </main>
  );
}
