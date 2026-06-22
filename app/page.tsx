// app/page.tsx
import Stats from "./components/Stats"; // Fixed capitalisation casing
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ProjectsPreview from "./components/ProjectsPreview";
import Education from "./components/Education";
import FutureProjects from "./components/FutureProjects";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div className="py-16 space-y-12 max-w-4xl mx-auto">
      {/* Clean layout loop hierarchy without ghost tags */}
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <ProjectsPreview />
      <Education />
      <FutureProjects />
      <Contact />
      <Stats />
    </div>
  );
}
