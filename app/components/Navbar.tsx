import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-8 py-4 backdrop-blur-xl">
      <div className="flex gap-6 text-lg font-semibold">
        <Link href="#home" className="hover:text-amber-300 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-amber-300 transition-colors">About</Link>
        <Link href="#projects" className="hover:text-amber-300 transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-amber-300 transition-colors">Skills</Link>
        <Link href="#resume" className="hover:text-amber-300 transition-colors">Resume</Link>
        <Link href="#contact" className="hover:text-amber-300 transition-colors">Contact</Link>
      </div>
      <div>
        <Link href="/thanksfortreat" className="rounded-full border border-amber-300/60 px-4 py-1 text-sm font-semibold text-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.35)] hover:border-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.55)] transition-all">
          Buy Me a Coffee
        </Link>
      </div>
    </nav>
  );
}