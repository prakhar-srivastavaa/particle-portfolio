import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function MainPage() {
  return (
    <>
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-12 md:px-10 lg:px-16">
        <section id="home" className="opacity-100 transition-opacity duration-1000"><Home /></section>
        <section id="about" className="opacity-100 transition-opacity duration-1000"><About /></section>
        <section id="projects" className="opacity-100 transition-opacity duration-1000"><Projects /></section>
        <section id="skills" className="opacity-100 transition-opacity duration-1000"><Skills /></section>
        <section id="resume" className="opacity-100 transition-opacity duration-1000"><Resume /></section>
        <section id="contact" className="opacity-100 transition-opacity duration-1000"><Contact /></section>
      </main>
      <script dangerouslySetInnerHTML={{__html: `
        const sections = document.querySelectorAll('main section');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
            }
          });
        }, { threshold: 0.3 });
        sections.forEach(section => {
          section.style.opacity = '0';
          observer.observe(section);
        });
      `}} />
    </>
  );
}
