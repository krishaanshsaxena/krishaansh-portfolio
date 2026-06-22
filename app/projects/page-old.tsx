// app/projects/page.tsx
import { projects } from "@/app/components/constants";

export const metadata = {
  title: "Projects | Krishaansh Saxena",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-slate-400">
          An ongoing catalog of what I'm building across software engineering, mathematical modeling, and machine learning systems.
        </p>
      </header>
      
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-6 hover:border-slate-700 transition duration-200"
          >
            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>
            <p className="mt-2 flex-grow text-sm text-slate-400 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-md bg-blue-950/50 px-2 py-1 text-xs font-medium text-blue-400 border border-blue-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {project.link !== "#" && (
              <div className="mt-4 pt-4 border-t border-slate-900/60">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition inline-flex items-center"
                >
                  View Source File &rarr;
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
