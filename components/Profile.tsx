export default function Profile() {
  return (
    <header className="flex flex-col items-center text-center pt-20 pb-10 px-6">
      <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
        <span className="font-bebas text-3xl tracking-widest text-white">
          LZ
        </span>
      </div>

      <h1 className="font-bebas text-4xl tracking-wide mt-6">
        LEIHL ZAMBRANO
      </h1>

      <p className="font-inter text-sm tracking-[0.2em] text-black/40 mt-1 uppercase">
        builtbyleihl
      </p>

      <p className="font-inter text-sm leading-relaxed text-black/60 max-w-sm mt-5">
        CS student and builder. I make things — software, content, and
        whatever else builtbyleihl needs. Here&apos;s where to find me.
      </p>
    </header>
  );
}
