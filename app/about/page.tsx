// app/about/page.tsx
export const metadata = {
  title: "About | Krishaansh Saxena",
};

export default function AboutPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto px-4 space-y-8 text-slate-300 leading-relaxed">
      <header className="border-b border-slate-900 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About Me
        </h1>
        <p className="mt-2 text-sm font-mono text-slate-500 uppercase tracking-wider">
          Background & Engineering Philosophy
        </p>
      </header>
      
      <section className="space-y-4">
        <p>
          Hi, I'm <strong className="text-white">Krishaansh Saxena</strong>. I am pursuing a B.Tech in Computer Science & Engineering with a specialized focus on Artificial Intelligence and Machine Learning at <span className="text-blue-400 font-medium">KIIT University</span>.
        </p>
        
        <p>
          I view software engineering and predictive systems as a deliberate craft. Rather than relying on superficial integrations, my roadmap is built on mastering foundations: computational statistics, data life cycles, option pricing architectures, and mathematical workflows.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-900 bg-slate-950/30 p-6">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Core Research Interest Matrices
        </h2>
        <ul className="grid gap-2 text-sm sm:grid-cols-2 text-slate-400">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Statistical Data Modeling
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Quantitative Computational Math
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Machine Learning Life Cycles
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Algorithmic Logic & Automation
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <p>
          I spend my time outside structural university coursework designing automated systems, modeling financial derivatives mathematics, and setting up clean personal infrastructure environments.
        </p>
        <p className="text-sm font-medium text-slate-400 border-t border-slate-900 pt-6">
          The structural vision for my engineering engine is straightforward: develop efficient, math-backed systems that convert deep raw datasets into functional, real-world execution.
        </p>
      </section>
    </div>
  );
}
