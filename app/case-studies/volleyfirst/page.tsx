import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contents from "@/components/Contents";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "VolleyFirst case study — Leihl Zambrano",
  description:
    "Making All Nations as easy to join as it is to enjoy: an event platform for London volleyball.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "challenge", label: "The challenge" },
  { id: "solution", label: "The solution" },
  { id: "research", label: "Research summary" },
  { id: "reflections", label: "Reflections" },
];

const details: { label: string; lines: string[]; badge?: boolean }[] = [
  {
    label: "Role",
    lines: [
      "To be continued",
      "Full-Stack Developer & Product Designer",
      "Research, UX Design, UI Design, Front-end, Back-end, Payments",
    ],
  },
  { label: "Platform", lines: ["Responsive web app", "Desktop & mobile"] },
  { label: "Timeline", lines: ["April 2026 – Current"] },
  { label: "Status", lines: ["In Development"], badge: true },
  {
    label: "Deliverables",
    lines: [
      "Development",
      "Event Pages, Application & Payment Flow, Application Tracking, Refunds, Automated Emails, Organiser Dashboard",
    ],
  },
];

const values = [
  {
    title: "Community",
    body: "The history of All Nations since 2005, past winners, and space for volunteers and coaches as well as players.",
  },
  {
    title: "Inclusion",
    body: "Clear pricing with no hidden costs, a site that works on any phone, and programmes like sitting volleyball and schools sessions.",
  },
  {
    title: "Unity",
    body: "You play for your nation and follow your place from application through to confirmed.",
  },
];

const features = [
  "Apply and pay in one step",
  "Track your application live",
  "Fair refunds, with the amount shown upfront",
  "Automatic emails and reminders at every step",
  "Simple event setup and applicant management for organisers",
  "Registration split into smaller forms, so players aren't all competing through one",
  "Built for big sign-up days, with secure payments and checks that stop anyone being charged twice",
];

const decisions = [
  {
    title: "Smaller registration forms, not one big one",
    body: [
      "After talking to Gary (see the research summary), I split each event's registration into multiple smaller forms. Players aren't all competing through a single form for a place.",
    ],
    tags: ["Research-led"],
  },
  {
    title: "Caching and indexing for sign-up day",
    body: [
      "When registration opens, everyone hits the same few pages at once. A load test at 500 concurrent users had the event pages timing out, because every request went straight to the database.",
      "I cached the public event list and event pages for 60 seconds, so hundreds of requests share one database query, and the cache clears straight away whenever an organiser changes an event. Each player's own application status is still fetched fresh. I also indexed the columns the busiest queries look up, like event slug, status and applicant, so every read stays fast.",
    ],
    tags: ["Next.js data cache", "PostgreSQL indexes", "k6 load testing"],
  },
  {
    title: "Sign in with Google and Apple",
    body: [
      "Players can sign up with their Google or Apple account in a couple of taps. Every application is tied to a real account, which makes applications easier to check and track, and builds a history of the events each participant has signed up to in the past.",
    ],
    tags: ["OAuth", "Clerk"],
  },
];

const takeaways = [
  {
    title: "Talk to the organiser earlier",
    body: "I started building before I'd spoken to Gary. If I'd talked to him sooner, I'd have learned about the scale of his event and the direction he wants to take it much earlier, and known what an organiser actually needs from the platform from day one.",
  },
  {
    title: "Think about scalability",
    body: "Scalability shaped the whole application: how many people it would serve, how many would apply for each event, and what steps I needed to take now so it keeps up as the events grow.",
  },
  {
    title: "Pivot fast when prototypes don't work out",
    body: "I'd already built a registration system before I understood how Gary had scaled All Nations for 2026. As soon as he explained his approach, I pivoted and built it in, so the platform meets what the organiser actually needs.",
  },
  {
    title: "Security comes first where money moves",
    body: "Payments are one of the most essential parts of the platform. Taking money for tickets needs a robust system and thorough documentation, so every payment is handled correctly, securely and only once.",
  },
];

const nextSteps = [
  { emoji: "🛠️", text: "Finalizing the development of our MVP features" },
  { emoji: "🧪", text: "Conducting usability testing with a small group of beta users" },
  { emoji: "✨", text: "Refining the experience based on feedback" },
];

const img = "/images/projects/volleyfirst";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink/40">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.01em]">
      {children}
    </h2>
  );
}

function Shot({
  src,
  alt,
  caption,
  ratio,
  phone = false,
}: {
  src: string;
  alt: string;
  caption: string;
  ratio: string;
  phone?: boolean;
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden border border-sky-100 bg-sky-50 shadow-lg shadow-sky-100/60 ${
          phone ? "rounded-[2rem] border-4 border-white" : "rounded-2xl"
        }`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes={phone ? "(max-width: 640px) 45vw, 260px" : "(max-width: 1024px) 100vw, 760px"}
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink/50">{caption}</figcaption>
    </figure>
  );
}

export default function VolleyFirstCaseStudy() {
  return (
    <main className="relative overflow-x-clip">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-sky-100 blur-3xl opacity-60"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Reveal>
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink"
          >
            <span aria-hidden>←</span> Case studies
          </Link>
        </Reveal>

        <Reveal delay={80} className="mt-8 max-w-3xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.01em] leading-[1.05]">
            VolleyFirst:{" "}
            <span className="text-sky-500">
              making All Nations as easy to join as it is to enjoy
            </span>
          </h1>
          <a
            href="https://project-volley-first.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-200 hover:bg-sky-300 text-ink text-sm font-medium px-5 py-2.5 transition-colors"
          >
            Visit the live site <span aria-hidden>↗</span>
          </a>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-16">
          <aside className="lg:order-2">
            <div className="lg:sticky lg:top-28">
              <Contents items={sections} />
            </div>
          </aside>

          <article className="min-w-0 space-y-24 lg:order-1">
            <section id="overview" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>Overview</SectionTitle>
              </Reveal>

              <div className="mt-8 space-y-10">
                <Reveal delay={80}>
                  <dl className="divide-y divide-sky-100 rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-100/50 p-6 sm:p-8">
                    {details.map(({ label, lines, badge }) => (
                      <div
                        key={label}
                        className="py-6 first:pt-0 last:pb-0"
                      >
                        <dt>
                          <Label>{label}</Label>
                        </dt>
                        <dd className="mt-3 space-y-2">
                          {badge ? (
                            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-base font-medium text-sky-700">
                              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                              {lines[0]}
                            </span>
                          ) : (
                            lines.map((line, i) => (
                              <p
                                key={line}
                                className={
                                  i === 0
                                    ? "text-lg font-semibold"
                                    : "text-base text-ink/65 leading-relaxed"
                                }
                              >
                                {line}
                              </p>
                            ))
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>

                <Reveal delay={160} className="max-w-3xl">
                  <div className="space-y-5 text-lg sm:text-xl text-ink/75 leading-relaxed">
                    <p>
                      I&apos;ve played at All Nations since 2024. It&apos;s one
                      of the best events in London volleyball, but signing up
                      through the website was hard. So I built a platform to make
                      the online side as good as the event itself.
                    </p>
                    <p>
                      VolleyFirst handles everything for an event in one place:
                      browsing events, applying, paying, getting reviewed and
                      getting confirmed. No more spreadsheets, bank transfers or
                      chasing emails.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>

            <section id="highlights" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>Highlights</SectionTitle>
              </Reveal>

              <div className="mt-8 space-y-8">
                <Reveal>
                  <Shot
                    src={`${img}/event.jpg`}
                    alt="All Nations Volleyball 2026 event page"
                    caption="Event page: dates, registration window, venue and fee up front."
                    ratio="1200 / 750"
                  />
                </Reveal>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Reveal>
                    <Shot
                      src={`${img}/events.jpg`}
                      alt="Upcoming events list"
                      caption="Every event in one list, with its registration status."
                      ratio="1200 / 750"
                    />
                  </Reveal>
                  <Reveal delay={100}>
                    <Shot
                      src={`${img}/allnations.jpg`}
                      alt="All Nations about page"
                      caption="The story of All Nations, now in its 21st year."
                      ratio="1200 / 750"
                    />
                  </Reveal>
                </div>
                <Reveal className="rounded-3xl bg-sky-50 border border-sky-100 px-6 py-10 sm:px-10">
                  <div className="grid grid-cols-2 gap-6 sm:gap-10 max-w-lg mx-auto">
                    <Shot
                      src={`${img}/m-home.jpg`}
                      alt="VolleyFirst homepage on mobile"
                      caption="Homepage on mobile"
                      ratio="390 / 844"
                      phone
                    />
                    <Shot
                      src={`${img}/m-event.jpg`}
                      alt="Event page on mobile"
                      caption="Event page on mobile"
                      ratio="390 / 844"
                      phone
                    />
                  </div>
                </Reveal>
              </div>
            </section>

            <section id="challenge" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>The challenge</SectionTitle>
                <div className="mt-6 space-y-4 text-ink/75 leading-relaxed max-w-2xl">
                  <p>
                    All Nations is one of the best events in London volleyball,
                    but the online side didn&apos;t match it. Signing up through
                    the original website was hard, and a lot of the process
                    happened outside it:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-sky-500">
                    <li>Applications were tracked in spreadsheets</li>
                    <li>Payments were made by bank transfer</li>
                    <li>Getting confirmed meant chasing emails</li>
                  </ul>
                </div>
              </Reveal>
            </section>

            <section id="solution" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>The solution</SectionTitle>
                <p className="mt-6 text-ink/75 leading-relaxed max-w-2xl">
                  One platform that takes a player from browsing events to a
                  confirmed place, built around the three things All Nations
                  stands for.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {values.map(({ title, body }, i) => (
                  <Reveal key={title} delay={i * 100}>
                    <div className="h-full rounded-3xl bg-sky-50 border border-sky-100 p-6">
                      <h3 className="font-display font-semibold text-lg text-sky-700">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-12">
                <h3 className="font-display font-semibold text-xl">
                  Key decisions
                </h3>
              </Reveal>
              <ol className="mt-5 space-y-4">
                {decisions.map(({ title, body, tags }, i) => (
                  <li key={title}>
                    <Reveal className="flex gap-5 rounded-3xl border border-sky-100 bg-white p-6 sm:p-7">
                      <span
                        aria-hidden
                        className="flex-none w-9 h-9 rounded-full bg-sky-200 text-sky-700 font-display font-bold flex items-center justify-center"
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-lg">
                          {title}
                        </h4>
                        <div className="mt-2 space-y-3 text-ink/70 leading-relaxed">
                          {body.map((para) => (
                            <p key={para}>{para}</p>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal className="mt-12">
                <h3 className="font-display font-semibold text-xl">
                  Key features
                </h3>
              </Reveal>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <li key={feature}>
                    <Reveal
                      delay={(i % 2) * 80}
                      className="h-full flex gap-3 rounded-2xl border border-sky-100 bg-white p-4"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex-none w-6 h-6 rounded-full bg-sky-200 text-sky-700 text-xs font-bold flex items-center justify-center"
                      >
                        ✓
                      </span>
                      <span className="text-ink/80 leading-relaxed">
                        {feature}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>

            <section id="research" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>Research summary</SectionTitle>
                <div className="mt-6 space-y-4 text-ink/75 leading-relaxed max-w-2xl">
                  <p>
                    Before building, I looked into the events VolleyFirst runs.
                    All Nations is the most notable: a tournament now in its 21st
                    year, where players from all over England play for their
                    country in London. In 2024 it had entrants from 85
                    countries, playing over 300 matches on 8 courts in 4 days.
                    Alongside it sit Junior All Nations and programmes like
                    sitting volleyball and schools sessions.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <blockquote className="mt-8 rounded-3xl bg-sky-50 border-l-4 border-sky-300 px-6 py-6 max-w-2xl">
                  <Label>Talking to the organiser</Label>
                  <div className="mt-3 space-y-4 text-ink/80 leading-relaxed">
                    <p>
                      I spoke with Gary Beckford at his event, introduced myself
                      and asked him about All Nations London Volleyball, the
                      adult tournament. It showed me how much the event
                      actually scales: just shy of a thousand people attend and
                      take part, and he runs it across two venues.
                    </p>
                    <p>
                      I asked how he&apos;d improved registration compared with
                      previous years. For 2026 he moved away from one big form,
                      where every player competes against everyone else for a
                      place, to several smaller forms.
                    </p>
                  </div>
                </blockquote>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6 rounded-3xl border border-sky-100 bg-white px-6 py-6 max-w-2xl">
                  <Label>What I changed</Label>
                  <p className="mt-3 text-ink/80 leading-relaxed">
                    After the talk I adapted the same idea in VolleyFirst:
                    registration is split into multiple smaller forms instead of
                    one form for everyone. Learning how he runs an event at that
                    scale was really insightful.
                  </p>
                </div>
              </Reveal>
            </section>

            <section id="reflections" className="scroll-mt-24">
              <Reveal>
                <SectionTitle>Reflections</SectionTitle>
              </Reveal>

              <div className="mt-8 space-y-5">
                <Reveal className="rounded-3xl bg-sky-50 border border-sky-100 p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-xl">
                    Key takeaways
                  </h3>
                  <ol className="mt-6 space-y-6">
                    {takeaways.map(({ title, body }, i) => (
                      <li key={title} className="flex gap-4">
                        <span
                          aria-hidden
                          className="flex-none w-8 h-8 rounded-full bg-sky-200 text-sky-700 text-sm font-display font-bold flex items-center justify-center"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-display font-semibold text-lg leading-snug">
                            {title}
                          </p>
                          <p className="mt-1.5 text-ink/70 leading-relaxed">
                            {body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>

                <Reveal className="rounded-3xl border border-sky-100 bg-white p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-xl">
                    Next steps
                  </h3>
                  <p className="mt-2 text-ink/60">
                    Our immediate next steps include:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {nextSteps.map(({ emoji, text }) => (
                      <li key={text} className="flex gap-3 text-ink/80 leading-relaxed">
                        <span aria-hidden className="flex-none">
                          {emoji}
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal className="mt-16 text-center">
                <p className="font-display font-semibold text-2xl sm:text-3xl">
                  Thank you for checking out the project{" "}
                  <span aria-hidden>🙌</span>
                </p>
                <Link
                  href="/#case-studies"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-200 hover:bg-sky-300 text-ink text-sm font-medium px-5 py-2.5 transition-colors"
                >
                  <span aria-hidden>←</span> Back to case studies
                </Link>
              </Reveal>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
