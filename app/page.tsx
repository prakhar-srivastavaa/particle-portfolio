import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SectionShell from "./components/SectionShell";

const sections = [
  { id: "home", component: <Home /> },
  { id: "about", component: <About /> },
  { id: "projects", component: <Projects /> },
  { id: "skills", component: <Skills /> },
  { id: "resume", component: <Resume /> },
  { id: "contact", component: <Contact /> },
];

export default function MainPage() {
  return (
    <main className="mx-auto flex max-w-[min(1200px,100%)] flex-col gap-24 px-4 py-12 md:px-6 lg:px-8 snap-y snap-mandatory">
      {sections.map((section) => (
        <SectionShell id={section.id} key={section.id}>
          {section.component}
        </SectionShell>
      ))}
    </main>
  );
}
