// About.tsx
const contacts = [
  {
    label: "Email",
    value: "emailprakharsrivastava@gmail.com",
    href: "mailto:emailprakharsrivastava@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "prakhar-srivastavaa",
    href: "https://github.com/prakhar-srivastavaa",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "prakhar-srivastavaa",
    href: "https://linkedin.com/in/prakhar-srivastavaa/",
    icon: "🔗",
  },
  {
    label: "LeetCode",
    value: "prakhar_srivastavaa",
    href: "https://leetcode.com/u/prakhar_srivastavaa/",
    icon: "📊",
  },
];

export default function About() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-amber-100 mb-6">About</h2>
      <p className="text-lg text-slate-200/90 leading-relaxed">
        I’m Prakhar Srivastava, a Computer Science graduate from KIIT University. I enjoy building scalable web applications, automating workflows, and exploring machine learning. I have experience with modern frameworks like Next.js, React, and FastAPI, and I love solving problems on LeetCode.
      </p>
      <p className="mt-4 text-lg text-slate-200/90 leading-relaxed">
        I’m always eager to learn new technologies and contribute to impactful projects, blending performance, design, and automation.
      </p>
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-xl font-semibold text-amber-200 mb-4">Connect With Me</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/30 px-5 py-3 text-amber-100 transition hover:border-amber-300 hover:bg-slate-900/60"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}