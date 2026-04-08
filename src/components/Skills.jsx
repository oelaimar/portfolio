import { Code2, Database, Wrench } from "lucide-react";

const Skills = ({ darkMode }) => {
  const dark = {
    heading: "text-white",
    text: "text-gray-300",
    card: "bg-white/5 border-white/10",
    pill: "bg-white/5 text-gray-200 border-white/10",
  };
  const light = {
    heading: "text-gray-900",
    text: "text-gray-700",
    card: "bg-white/70 border-gray-200",
    pill: "bg-white text-gray-700 border-gray-200",
  };
  const t = darkMode ? dark : light;

  const groups = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5 text-orange-500" />,
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-5 h-5 text-orange-500" />,
      items: ["PHP", "MySQL", "PostgreSQL", "REST basics"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-orange-500" />,
      items: ["Git/GitHub", "Docker", "Linux", "Vite", "Figma basics"],
    },
  ];

  return (
    <section id="skills" className="relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-16 lg:py-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.heading}`}>
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className={`mt-4 ${t.text}`}>A practical toolkit I use to ship responsive, modern web experiences.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              className={`rounded-2xl border ${t.card} backdrop-blur-lg p-6 shadow-lg`}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10">{g.icon}</div>
                <h3 className={`text-lg font-bold ${t.heading}`}>{g.title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className={`px-3 py-1 rounded-full border text-sm ${t.pill}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

