import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = ({ darkMode }) => {
  const dark = {
    heading: "text-white",
    text: "text-gray-300",
    card: "bg-white/5 border-white/10",
    badge: "bg-white/5 text-gray-200 border-white/10",
  };
  const light = {
    heading: "text-gray-900",
    text: "text-gray-700",
    card: "bg-white/70 border-gray-200",
    badge: "bg-white text-gray-700 border-gray-200",
  };
  const t = darkMode ? dark : light;

  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-orange-500" />,
      title: "YouCode Student",
      value: "Web Development",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-orange-500" />,
      title: "Focus",
      value: "Frontend + Full‑stack growth",
    },
    {
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      title: "Based in",
      value: "Morocco",
    },
  ];

  const chips = ["React", "Tailwind", "TypeScript", "PHP", "MySQL", "PostgreSQL", "Docker", "Linux"];

  return (
    <section id="about" className="relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-16 lg:py-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.heading}`}>
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className={`mt-4 ${t.text}`}>
            I enjoy building clean, modern interfaces with great UX. I care about performance, accessibility, and
            maintainable code.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border ${t.card} backdrop-blur-lg p-6 shadow-lg`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10">{item.icon}</div>
                <div className="text-left">
                  <p className={`text-sm ${t.text}`}>{item.title}</p>
                  <p className={`font-semibold ${t.heading}`}>{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className={`mt-10 max-w-5xl mx-auto rounded-2xl border p-6 lg:p-8 shadow-lg backdrop-blur-lg ${t.card}`}
        >
          <h3 className={`text-xl font-bold ${t.heading}`}>Tech I work with</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className={`px-3 py-1 rounded-full border text-sm ${t.badge}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

