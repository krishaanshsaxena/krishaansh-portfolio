// app/components/ProjectsPreview.tsx
import { projects } from "./constants";

export default function ProjectsPreview() {
  // Only display the first 2 or 3 projects as a homepage preview
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-10 border-b border-slate-900/60">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Featured Projects
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Systems & Architecture Builds
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewProjects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/30 p-6 hover:border-slate-800 transition duration-200"
          >
            <h3 className="text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 flex-grow text-sm text-slate-400 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-md bg-blue-950/30 px-2 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-900/20"
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
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1"
                >
                  View Repository &rarr;
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
