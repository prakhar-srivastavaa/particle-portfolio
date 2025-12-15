// Resume.tsx
export default function Resume() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-amber-100 mb-6">Resume</h2>
      <p className="text-lg text-slate-200/90 mb-6">
        For a detailed overview of my experience, education, and certifications, grab the PDF.
      </p>
      <a
        href="https://drive.google.com/file/d/1VmuH3PKU7IYjEJICYGzE85ORrArmSuHZ/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
      >
        View Resume
      </a>
    </section>
  );
}