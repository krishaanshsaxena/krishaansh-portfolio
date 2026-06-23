// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ProjectsPreview from "./components/ProjectsPreview";
import Education from "./components/Education";
import FutureProjects from "./components/FutureProjects";
import Contact from "./components/Contact";
import Stats from "./components/Stats"; // Ensures clean capitalized module resolution

export default function HomePage() {
  return (
    <div className="py-8 space-y-6 max-w-6xl mx-auto w-full">
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
