const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Next.js",
  "Git",
];

const softSkills = [
  "Problem Solving",
  "Independent",
  "Critical Thinking",
  "Pattern Recognition",
  "Logical Reasoning",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-16 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-4">
          02 — SKILLS
        </p>
        <h2 className="font-bebas text-[12vw] md:text-[8vw] lg:text-[6vw] leading-none text-black dark:text-white mb-20">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-6">
              TECHNICAL
            </p>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-black/15 dark:border-white/15 font-inter text-sm tracking-wider text-black/70 dark:text-white/70 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-6">
              COGNITIVE
            </p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-black/8 dark:border-white/8 font-inter text-sm tracking-wider text-black/38 dark:text-white/38 hover:border-black/25 dark:hover:border-white/25 hover:text-black/60 dark:hover:text-white/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
