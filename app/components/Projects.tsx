// Projects.tsx
const projects = [
  {
    title: "GeekCode — Coding Practice Platform (2025)",
    points: [
      "Full-stack platform using Next.js, TypeScript, and Firebase.",
      "Authentication, code editor, test case execution, and validation.",
      "State management with Recoil, data persistence with Firestore.",
    ],
  },
  {
    title: "Anuvaad — English to Hinglish Translator (2024)",
    points: [
      "Transformer-based NLP model for translation.",
      "Fine-tuned Llama 3 with PEFT, LoRA, and quantization.",
      "Efficient fine-tuning and deployment with Unsloth.",
    ],
  },
  {
    title: "whatsNow! — WhatsApp Auto-Reply Script (2023)",
    points: [
      "Python automation using Selenium for WhatsApp inquiries.",
      "Reduced manual response time by 60%.",
      "Automated 95% of information delivery for 100+ students.",
    ],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-amber-100 mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg transition hover:-translate-y-1 hover:border-amber-300/70">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">{project.title}</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-200/90">
              {project.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}