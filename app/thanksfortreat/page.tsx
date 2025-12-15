"use client";

import React from "react";

export default function ThanksForTreat() {
  const handleDone = () => {
    alert("Thank you for the coffee! ☕");
  };

  return (
    <main className="relative min-h-screen text-slate-100 px-6 py-12 flex items-center justify-center">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/30 px-8 py-10 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-6">
          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Buy Me A Coffee</p>
            <h1 className="text-3xl font-bold text-amber-100">Support Prakhar Srivastava</h1>
            <p className="text-slate-200/80">Scan or use the UPI ID below. Every coffee fuels more builds and experiments.</p>
          </header>

          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 p-4 shadow-lg">
              <img
                src="/upi.jpg"
                alt="UPI QR Code"
                className="h-64 w-64 rounded-xl object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-300">UPI ID</span>
              <div className="rounded-full border border-amber-300/60 bg-amber-300/10 px-4 py-2 text-amber-100 font-semibold">
                prakharbksc-1@oksbi
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleDone}
              className="rounded-full bg-amber-300 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
            >
              Done
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
