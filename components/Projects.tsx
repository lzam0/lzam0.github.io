import Image from "next/image";

const projects = [
  {
    title: "VOLLEYFIRST EVENT PLATFORM",
    description:
      "Full-stack event management platform for VolleyFirst, handling seasonal volleyball event registration, payments, and participant communications.",
    demo: "https://project-volley-first.vercel.app/" as string | null,
    github: null as string | null,
    image: "/images/projects/volleyfirst.png" as string | null,
  },
  {
    title: "WEND — MULTIPLAYER WORD PUZZLE",
    description:
      "Real-time multiplayer word puzzle game. A host runs a room on a shared screen while players race to trace words on their phones, with boards generated live per topic.",
    demo: "https://multiplayer-puzzle-game-bay.vercel.app/" as string | null,
    github: "https://github.com/lzam0/Multiplayer-Puzzle-Game" as
      | string
      | null,
    image: "/images/projects/wend.png" as string | null,
  },
  {
    title: "PROJECT PLACEHOLDER 03",
    description: "Short description of this project goes here.",
    demo: null as string | null,
    github: null as string | null,
    image: null as string | null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-md mx-auto w-full mt-12">
      <p className="font-inter text-xs tracking-[0.3em] text-black/30 mb-4 uppercase text-center">
        Projects
      </p>

      <div className="flex flex-col gap-3">
        {projects.map(({ title, description, demo, github, image }) => {
          const hasLinks = demo || github;

          return (
            <div
              key={title}
              className={`px-6 py-4 rounded-2xl border ${
                hasLinks ? "border-black/10" : "border-dashed border-black/15"
              }`}
            >
              <h3 className="font-inter text-sm font-bold text-black">
                {title}
              </h3>
              <p className="font-inter text-xs text-black/45 mt-1">
                {description}
              </p>

              {image &&
                (demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video w-full overflow-hidden rounded-xl mt-4"
                  >
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 448px) 100vw, 448px"
                    />
                  </a>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl mt-4">
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 448px) 100vw, 448px"
                    />
                  </div>
                ))}

              {hasLinks && (
                <div className="flex gap-3 mt-3">
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-[10px] tracking-[0.15em] text-black/50 hover:text-black border border-black/10 hover:border-black/40 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                      LIVE
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-[10px] tracking-[0.15em] text-black/50 hover:text-black border border-black/10 hover:border-black/40 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                      CODE
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
