import React from "react";

const projects: {
  title: string;
  description: React.ReactNode;
  tags: string[];
  github: string | null;
  demo: string | null;
}[] = [
  {
    title: "ASL HAND POSE CLASSIFICATION",
    description: (
      <>
        AI/ML approaches for classifying American Sign Language hand poses.
        Performed <strong>data cleaning, preprocessing, and transformation</strong> to
        prepare high-quality datasets. Applied{" "}
        <strong>feature engineering</strong> and{" "}
        <strong>exploratory data analysis (EDA)</strong> to improve feature
        reliability. Evaluated model performance using{" "}
        <strong>accuracy, precision, recall, and F1-score</strong> to identify
        the optimal classification approach.
      </>
    ),
    tags: ["PYTHON", "MEDIAPIPE", "SCIKIT-LEARN", "PANDAS"],
    github: "https://github.com/lzam0/Evaluating-Machine-Learning-Models",
    demo: null,
  },
  {
    title: "REAL-TIME OBJECT DETECTION",
    description: (
      <>
        Browser-based application using the{" "}
        <strong>COCO-SSD pre-trained model</strong> to perform{" "}
        <strong>real-time object detection</strong> entirely on the client.
        Supports <strong>live webcam streaming</strong>,{" "}
        <strong>batch image processing</strong>, and{" "}
        <strong>CSV data export</strong> — all processed locally within the
        browser via <strong>TensorFlow.js</strong>. Features an interactive{" "}
        <strong>ROI selector</strong> and a warm-up phase for tensor
        allocation.
      </>
    ),
    tags: ["JAVASCRIPT", "TENSORFLOW.JS", "COCO-SSD", "EXPRESS.JS"],
    github:
      "https://github.com/lzam0/Real-Time-Object-Detection-with-TensorFlow.js",
    demo: "https://youtu.be/aCmxGQlsxSM",
  },
  {
    title: "PARKING MANAGEMENT SYSTEM",
    description: (
      <>
        Developed a <strong>full-stack web application</strong> with{" "}
        <strong>Node.js backend</strong> and <strong>Pug frontend</strong>,
        implementing <strong>CRUD operations</strong> for vehicle entries and{" "}
        <strong>real-time parking availability</strong>. Designed a{" "}
        <strong>PostgreSQL database schema</strong> with relationships between
        users and parking sessions, ensuring{" "}
        <strong>data integrity, capacity limits, and automatic fee calculation</strong>.
        Implemented secure <strong>authentication and authorisation</strong> with{" "}
        <strong>JWT, cookies, and role-based access</strong> for admins and
        regular users, alongside <strong>form validation</strong> and backend
        checks to prevent invalid sessions. Built dynamic frontend updates and
        automated <strong>Mocha/Chai tests</strong>.
      </>
    ),
    tags: ["JAVASCRIPT", "POSTGRESQL", "PUG", "BOOTSTRAP", "MOCHA", "CHAI"],
    github: "https://github.com/lzam0/Parking-Management-System",
    demo: null,
  },
  {
    title: "SOUTH AFRICAN DRAINAGE VISUALIZER",
    description: (
      <>
        Web application to educate South Africans about{" "}
        <strong>rainfall and flooding</strong> across drainage regions. Built a{" "}
        <strong>PostgreSQL database</strong> with{" "}
        <strong>raw data cleaning pipelines</strong> to drive{" "}
        <strong>interactive graph visualisations</strong>. Developed
        collaboratively using <strong>Git</strong> and{" "}
        <strong>agile sprint methodology</strong>.
      </>
    ),
    tags: ["JAVASCRIPT", "POSTGRESQL", "PUG", "BOOTSTRAP"],
    github: "https://github.com/lzam0/Flood-Risk-Visualisation-System",
    demo: null,
  },
  {
    title: "VIDEOGAME SEARCH ENGINE",
    description: (
      <>
        An <strong>Information Retrieval (IR)</strong> system that processes{" "}
        <strong>HTML game documents</strong>, extracting metadata such as
        developer, publisher, genre, and ESRB rating. Applies{" "}
        <strong>content weighting</strong> to key fields to improve search
        relevance, then ranks results by <strong>TF-IDF similarity</strong>.
        Displays results via <strong>bar charts and tabular visualisation</strong>.
        Uses <strong>threading</strong> to keep the GUI responsive during file
        import and search, with <strong>efficiency testing</strong> via box
        plot benchmarks.
      </>
    ),
    tags: ["PYTHON", "SCIKIT-LEARN", "SPACY", "NLTK", "MATPLOTLIB"],
    github: "https://github.com/lzam0/Videogame-Search-Engine",
    demo: null,
  },
  {
    title: "UK CRIME DATA SCIENCE",
    description: (
      <>
        Analysed <strong>Suffolk County crime trends</strong> during and after
        the <strong>COVID-19 pandemic</strong>, comparing against{" "}
        <strong>nationwide crime patterns</strong> to identify commonalities
        and disparities. Examined categories including theft, assault, and
        vandalism. Leveraged <strong>statistical analysis</strong> and{" "}
        <strong>data visualisation</strong> using{" "}
        <strong>NumPy, Pandas, and Matplotlib</strong> to present how crime
        shifted in response to the pandemic's socio-economic circumstances and
        recovery phases.
      </>
    ),
    tags: ["PYTHON", "PANDAS", "NUMPY", "MATPLOTLIB", "DATA SCIENCE"],
    github: "https://github.com/lzam0/UK-Crime-Data-Science-Project",
    demo: null,
  },
];

const featured = {
  title: "VOLLEYFIRST EVENT PLATFORM",
  description: (
    <>
      Built and deployed a <strong>full-stack event management platform</strong>{" "}
      for <a href="https://www.volleyfirst.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors duration-200">VolleyFirst</a>,
      handling <strong>seasonal volleyball event registration, payments, and
      participant communications</strong>. Developed a{" "}
      <strong>RESTful API architecture</strong> with{" "}
      <strong>secure authentication (Clerk)</strong>,{" "}
      <strong>automated payment processing (Stripe)</strong>, and{" "}
      <strong>transactional email workflows (Resend)</strong> integrated with a{" "}
      <strong>PostgreSQL database (Supabase)</strong>. Implemented{" "}
      <strong>role-based access control (RBAC)</strong>, structured database
      models, and event workflows across the full stack. Led the project
      independently from <strong>planning through deployment</strong> on Vercel.
    </>
  ),
  tags: ["NEXT.JS", "REACT", "POSTGRESQL", "STRIPE", "CLERK", "RESEND", "VERCEL"],
  github: null,
  demo: "https://project-volley-first.vercel.app/",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-16 bg-white dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-xs tracking-[0.35em] text-black/30 dark:text-white/30 mb-4">
          03 — WORK
        </p>
        <h2 className="font-bebas text-[12vw] md:text-[8vw] lg:text-[6vw] leading-none text-black dark:text-white mb-16">
          PROJECTS
        </h2>

        {/* Featured: VolleyFirst — full width, pinned at top */}
        <div className="mb-px bg-black/5 dark:bg-white/5">
          <div className="bg-white dark:bg-black p-8 md:p-12 hover:bg-black/[0.02] dark:hover:bg-white/[0.025] transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
              <div>
                <span className="font-bebas text-7xl text-black/6 dark:text-white/6 leading-none select-none block">
                  01
                </span>
                <span className="font-inter text-[10px] tracking-[0.25em] text-black/30 dark:text-white/30 mt-2 block">
                  FEATURED
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-bebas text-4xl md:text-6xl text-black dark:text-white tracking-wide leading-none">
                    {featured.title}
                  </h3>
                  <div className="flex gap-3 ml-4">
                    {featured.demo && (
                      <a
                        href={featured.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-[10px] tracking-[0.2em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/35 dark:hover:border-white/35 px-3 py-1.5 transition-all duration-200"
                      >
                        LIVE
                      </a>
                    )}
                    {featured.github && (
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-[10px] tracking-[0.2em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/35 dark:hover:border-white/35 px-3 py-1.5 transition-all duration-200"
                      >
                        CODE
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-inter text-sm md:text-base leading-relaxed text-black/48 dark:text-white/48 max-w-2xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-3 border-t border-black/5 dark:border-white/5">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-[10px] tracking-[0.15em] text-black/22 dark:text-white/22"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-column grid for pinned repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 dark:bg-white/5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 md:p-10 flex flex-col gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.025] transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-bebas text-6xl text-black/6 dark:text-white/6 leading-none select-none">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-[10px] tracking-[0.2em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/35 dark:hover:border-white/35 px-3 py-1.5 transition-all duration-200"
                    >
                      LIVE
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-[10px] tracking-[0.2em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/35 dark:hover:border-white/35 px-3 py-1.5 transition-all duration-200"
                    >
                      CODE
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-bebas text-3xl md:text-4xl text-black dark:text-white tracking-wide leading-none">
                {project.title}
              </h3>

              <p className="font-inter text-sm leading-relaxed text-black/48 dark:text-white/48 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-3 border-t border-black/5 dark:border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-[10px] tracking-[0.15em] text-black/22 dark:text-white/22"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
