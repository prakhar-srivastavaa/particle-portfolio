// Contact.tsx
"use client";

import { useState } from "react";

type EmailJSClient = {
  send: (
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ) => Promise<{ status: number; text: string }>;
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const emailClient: EmailJSClient | undefined =
        typeof window !== "undefined" ? (window as typeof window & { emailjs?: EmailJSClient }).emailjs : undefined;

      if (!emailClient) {
        throw new Error("Email service not available. Please try again later.");
      }

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not configured. Update service and template IDs.");
      }

      await emailClient.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "emailprakharsrivastava@gmail.com",
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-20">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Get In Touch
        </h2>

        {status === "success" ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-center text-green-400">
            Message sent successfully! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
              suppressHydrationWarning
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
              suppressHydrationWarning
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              autoComplete="off"
              className="w-full rounded-lg border border-white/20 bg-slate-900/40 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-300/20 resize-none"
              suppressHydrationWarning
            />
            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-amber-300 px-6 py-3 text-slate-900 font-semibold shadow-lg transition-all hover:bg-amber-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}

        {status === "error" && (
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
            {errorMessage || "Failed to send message. Please try again."}
          </div>
        )}
      </div>
    </section>
  );
}