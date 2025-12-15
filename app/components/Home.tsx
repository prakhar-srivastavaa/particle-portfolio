// Home.tsx
export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-sm text-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            Prakhar Srivastava — Full-Stack & ML
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-amber-100 md:text-5xl">
            Building immersive web experiences with code, motion, and AI.
          </h1>
          <p className="text-lg text-slate-200/80">
            Bangalore-based developer crafting performant products, automation, and ML-powered tools. I love shaping ideas into interactive experiences.
          </p>
          <div className="grid gap-3 text-sm font-semibold text-slate-100/90 sm:grid-cols-2">
            <span>FastAPI + Python backend</span>
            <span>TypeScript + Next.js frontend</span>
            <span>Agentic AI / GenAI workflows</span>
            <span>Automation, data, and SQL</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:emailprakharsrivastava@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-300 px-5 py-2 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/prakhar-srivastavaa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 font-semibold text-amber-100 transition hover:border-amber-300 hover:text-amber-300"
            >
              View GitHub
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300/80">
            <span className="rounded-full border border-white/10 px-3 py-1">Next.js</span>
            <span className="rounded-full border border-white/10 px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-white/10 px-3 py-1">FastAPI</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Automation</span>
            <span className="rounded-full border border-white/10 px-3 py-1">ML / NLP</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-72 w-72 rounded-full border border-amber-200/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_25px_70px_rgba(17,24,39,0.6)] lg:h-80 lg:w-80">
            <div className="absolute inset-1 rounded-full border border-amber-300/30" />
            <img
              src="/pic.jpg"
              alt="Prakhar Srivastava"
              className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}