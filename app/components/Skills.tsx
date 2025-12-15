// Skills.tsx
const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML ES6", "CSS", "JSX"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Flask", "FastAPI", "Selenium", "PyTorch", "Numpy", "Pandas"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Firebase", "SQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Postman", "VS Code", "IntelliJ", "Linux"],
  },
  {
    title: "Concepts",
    items: ["RESTful API Design", "Automation", "Machine Learning", "NLP"],
  },
];

export default function Skills() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/30 p-10 shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-amber-100 mb-6">Skills</h2>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-sm text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}