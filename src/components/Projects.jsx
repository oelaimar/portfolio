import { ArrowUpRight, Code } from "lucide-react";

const Projects = ({ darkMode }) => {
  const dark = {
    heading: "text-white",
    text: "text-gray-300",
    card: "bg-white/5 border-white/10",
    subtle: "text-gray-400",
    button: "bg-white/5 border-white/10 text-white hover:bg-white/10",
  };
  const light = {
    heading: "text-gray-900",
    text: "text-gray-700",
    card: "bg-white/70 border-gray-200",
    subtle: "text-gray-600",
    button: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
  };
  const t = darkMode ? dark : light;

  // Replace links/titles with your real projects anytime.
  const projects = [
    {
      title: "Project One",
      description: "A responsive web app with modern UI and clean UX.",
      tags: ["React", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Two",
      description: "A small full‑stack exercise with authentication and CRUD.",
      tags: ["PHP", "PostgreSQL"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Three",
      description: "A UI component playground focusing on accessibility.",
      tags: ["TypeScript", "React"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="project" className="relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-16 lg:py-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.heading}`}>
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className={`mt-4 ${t.text}`}>A few things I’ve built recently. (Swap placeholders with real links.)</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className={`rounded-2xl border ${t.card} backdrop-blur-lg p-6 shadow-lg flex flex-col`}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className={`text-lg font-bold ${t.heading}`}>{p.title}</h3>
                <span className={`text-xs ${t.subtle}`}>0{idx + 1}</span>
              </div>
              <p className={`mt-3 ${t.text}`}>{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 rounded-full border text-sm ${darkMode ? "bg-white/5 border-white/10 text-gray-200" : "bg-white border-gray-200 text-gray-700"}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${t.button}`}
                >
                  Live <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${t.button}`}
                >
                  Code <Code className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

