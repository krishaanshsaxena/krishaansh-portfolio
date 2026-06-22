import { HERO } from "./site-data";

export default function Hero() {
  return (
    <section className="py-32">
      <p className="mb-6 font-medium text-blue-500">
        {HERO.subtitle}
      </p>

      <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
        {HERO.title}
      </h1>

      <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-400">
        {HERO.description}
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="/projects"
          className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500"
        >
          View Projects
        </a>

        <a
          href="/resume"
          className="rounded-xl border border-slate-800 px-6 py-3 hover:bg-slate-900"
        >
          Resume
        </a>

        <a
          href="https://github.com/krishaanshsaxena"
          target="_blank"
          className="rounded-xl border border-slate-800 px-6 py-3 hover:bg-slate-900"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/krishaansh-saxena/"
          target="_blank"
          className="rounded-xl border border-slate-800 px-6 py-3 hover:bg-slate-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}