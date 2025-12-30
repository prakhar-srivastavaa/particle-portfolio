"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#resume", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur-xl md:px-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-amber-300 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-amber-300 hover:text-amber-400 transition-colors"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Coffee Button */}
      <div className="ml-auto">
        <Link href="/thanksfortreat" className="rounded-full border border-amber-300/60 px-3 py-1 text-xs md:text-sm md:px-4 font-semibold text-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.35)] hover:border-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.55)] transition-all">
          <span className="hidden sm:inline">Buy Me a Coffee</span>
          <span className="sm:hidden">☕</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 99999 }}
        >
          {/* Full black background - completely solid */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: '#020617' }}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className="relative h-full w-72 shadow-2xl"
            style={{ backgroundColor: '#020617' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between p-5 border-b border-amber-300/40"
              style={{ backgroundColor: '#0f172a' }}
            >
              <span className="text-2xl font-bold text-amber-300">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div 
              className="flex flex-col gap-1 p-4"
              style={{ backgroundColor: '#020617' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-white py-4 px-5 rounded-xl transition-all hover:bg-slate-800 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}