import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Cursor from "./components/Cursor";

export const metadata = {
  title: "Prakhar Srivastava",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100" suppressHydrationWarning>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="afterInteractive"
        />
        <Script id="emailjs-init" strategy="afterInteractive">
          {`
            if (typeof emailjs !== "undefined") {
              emailjs.init({
                publicKey: "${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""}",
              });
            }
          `}
        </Script>
        <Particles />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
        <Cursor />
      </body>
    </html>
  );
}