import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsPreview from "./components/ProjectsPreview";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <ProjectsPreview />
      <Contact />
    </div>
  );
}
