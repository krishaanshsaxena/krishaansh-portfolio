import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import FutureProjects from "./components/FutureProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Timeline />
      <FutureProjects />
      <Contact />
      <Footer />
    </main>
  );
}
