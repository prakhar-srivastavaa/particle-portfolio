// Contact.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/10 px-6 py-8 shadow-2xl backdrop-blur-sm flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-amber-100 mb-6 text-center">Get In Touch</h2>
        {submitted ? (
          <div className="rounded-xl bg-green-500/20 border border-green-500/50 p-6 text-center">
            <p className="text-lg text-green-300 font-semibold">Thanks for reaching out! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none resize-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-amber-300 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}