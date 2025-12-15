import "./globals.css";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Cursor from "./components/Cursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100">
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