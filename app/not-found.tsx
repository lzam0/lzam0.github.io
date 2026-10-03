import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Leihl Zambrano",
};

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-sky-100 blur-3xl opacity-60"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 flex flex-col items-center text-center">
        <p className="font-display font-bold text-7xl sm:text-8xl tracking-[-0.01em] text-sky-200">
          404
        </p>
        <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-[-0.01em]">
          This page is out of bounds{" "}
          <span aria-hidden>🏐</span>
        </h1>
        <p className="mt-4 text-lg text-ink/60 max-w-md leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-200 hover:bg-sky-300 text-ink text-sm font-medium px-5 py-2.5 transition-colors"
        >
          <span aria-hidden>←</span> Back to home
        </Link>
      </div>
    </main>
  );
}
