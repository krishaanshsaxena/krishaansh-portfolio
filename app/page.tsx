// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import BayesWidget from "./components/BayesWidget"; 
import BlackScholesWidget from "./components/BlackScholesWidget"; 
import BollingerWidget from "./components/BollingerWidget"; // 1. Import Bollinger Widget
import ProjectsPreview from "./components/ProjectsPreview";
import Education from "./components/Education";
import FutureProjects from "./components/FutureProjects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";

export default function HomePage() {
  return (
    <div className="py-8 space-y-6 max-w-6xl mx-auto w-full">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <BayesWidget /> 
      <BlackScholesWidget /> 
      {/* 2. Mount Time-Series Volatility Indicator Chart */}
      <BollingerWidget /> 
      <ProjectsPreview />
      <Education />
      <FutureProjects />
      <Contact />
      <Stats />
    </div>
  );
}
