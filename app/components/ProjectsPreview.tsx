import { projects } from "./site-data";

export default function ProjectsPreview() {
  return (
    <section className="py-32">
      <div className="mb-16">
        <h2 className="text-4xl font-bold">Projects</h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A selection of projects and ideas that I am building and
          exploring as I continue learning.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 p-8 transition hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/projects"
          className="text-blue-500 hover:text-blue-400"
        >
          View all projects →
        </a>
      </div>
    </section>
  );
}