// app/page.tsx
import { HERO, socialItems } from "./components/constants";
import Stats from "./components/stats";


import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsPreview from "./components/ProjectsPreview";
// import Resume from "./components/Resume";
import Education from "./components/Education";
import FutureProjects from "./components/FutureProjects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function HomePage() {
  return (
    <div className="py-16 space-y-12 max-w-4xl mx-auto">
      
      {/* Hero Section */}
      <section className="space-y-4"  style={{ display: 'none' }}>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          {HERO.name}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-blue-400 tracking-tight">
          {HERO.tagline}
        </p>
        <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
          {HERO.bio}
        </p>


        {/* VISIBLE SOCIAL LINKS (Including Twitter) */}
        <div className="mt-6 flex flex-wrap gap-4 pt-2" style={{ display: 'none' }}>
          {socialItems.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-300 hover:text-blue-400 transition duration-200"
            >
              {social.name === "Twitter" ? "X / @krishaansh_s" : social.name}
            </a>
          ))}
        </div>
      </section>

      {/* Statistics Section (From Step 2) */}
           
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
