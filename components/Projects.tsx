import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

// Case studies stack vertically, newest first. Add a new one by appending an
// entry here and creating its page (see docs/case-study-template.md).
const caseStudies = [
  {
    title: "VolleyFirst",
    tagline: "Making All Nations as easy to join as it is to enjoy",
    description:
      "An event platform for London's biggest volleyball tournament. Browse, apply, pay and get confirmed in one place.",
    tags: ["Responsive web app", "In development"],
    href: "/case-studies/volleyfirst",
    demo: "https://project-volley-first.vercel.app/",
    desktop: "/images/projects/volleyfirst/event.jpg",
    mobile: "/images/projects/volleyfirst/m-home.jpg",
  },
];

const pill =
  "text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3 py-1.5 rounded-full transition-colors";

export default function Projects() {
  return (
    <section id="case-studies" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <Reveal className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.01em]">
            Case Studies
          </h2>
          <p className="mt-2 text-ink/60">Things I&apos;ve built recently.</p>
        </Reveal>

        <div className="mt-10 max-w-2xl mx-auto space-y-8">
          {caseStudies.map(
            ({ title, tagline, description, tags, href, demo, desktop, mobile }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="group relative rounded-3xl border border-sky-100 bg-white p-3 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sky-50 group-hover:bg-sky-100 transition-colors duration-500">
                    <div className="absolute left-[6%] top-[10%] w-[78%] aspect-[1200/750] overflow-hidden rounded-xl border border-sky-100 shadow-lg shadow-sky-200/50 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-3 group-hover:-translate-x-2 group-hover:-rotate-2 group-hover:scale-[1.03] group-hover:shadow-2xl">
                      <Image
                        src={desktop}
                        alt={`${title} on desktop`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 80vw, 520px"
                      />
                    </div>
                    <div className="absolute right-[6%] bottom-[-18%] w-[24%] aspect-[390/844] overflow-hidden rounded-[1.25rem] border-4 border-white shadow-xl shadow-sky-200/60 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-8 group-hover:translate-x-1 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-2xl">
                      <Image
                        src={mobile}
                        alt={`${title} on mobile`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 25vw, 160px"
                      />
                    </div>
                  </div>

                  <div className="px-3 pt-5 pb-3">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 font-display font-bold text-2xl sm:text-3xl tracking-[-0.01em]">
                      {/* Stretched link: the whole card opens the case study. */}
                      <Link
                        href={href}
                        className="after:absolute after:inset-0 after:rounded-3xl focus:outline-none focus-visible:after:ring-4 focus-visible:after:ring-sky-300"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="mt-1 font-display text-lg text-sky-500 leading-snug">
                      {tagline}
                    </p>
                    <p className="mt-3 text-ink/60 leading-relaxed">
                      {description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-sky-200 group-hover:bg-sky-300 text-ink text-sm font-medium px-5 py-2.5 transition-colors">
                        View case study{" "}
                        <span
                          aria-hidden
                          className="group-hover:translate-x-0.5 transition-transform"
                        >
                          →
                        </span>
                      </span>
                      {demo && (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${pill} relative z-10`}
                        >
                          Live site
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
