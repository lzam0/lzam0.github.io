"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function Gallery({ photos }: { photos: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const control =
    "absolute flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors";

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {photos.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View photo ${i + 1} full screen`}
              className="group relative block w-full aspect-[4/5] overflow-hidden rounded-2xl bg-sky-100 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
            >
              <Image
                src={src}
                alt="Volleyball photo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${open + 1} of ${photos.length}`}
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center animate-[fade-up_0.25s_ease-out]"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="relative w-[92vw] h-[82vh]">
            <Image
              key={photos[open]}
              src={photos[open]}
              alt="Volleyball photo"
              fill
              className="object-contain"
              sizes="92vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {open + 1} / {photos.length}
          </p>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className={`${control} top-4 right-4`}
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className={`${control} left-3 sm:left-6 top-1/2 -translate-y-1/2`}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className={`${control} right-3 sm:right-6 top-1/2 -translate-y-1/2`}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
