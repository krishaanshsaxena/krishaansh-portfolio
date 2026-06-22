// app/components/About.tsx
export default function About() {
  return (
    <section className="py-10 border-b border-slate-900/60">
      {/* Unified Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          About Me
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Background & System Philosophy
        </p>
      </div>

      {/* Main Structural Layout Grid */}
      <div className="grid gap-8 md:grid-cols-3 items-start">
        
        {/* Left Columns (2/3 width on desktop) for your narrative */}
        <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed">
          <p>
            Hi, I'm <strong className="text-white">Krishaansh Saxena</strong>. I am currently pursuing a B.Tech in Computer Science & Engineering with a core focus on Artificial Intelligence and Machine Learning at <span className="text-blue-400 font-medium">KIIT University</span>.
          </p>
          <p>
            I treat software engineering and predictive modeling as a deliberate, continuous craft. My technical roadmap centers heavily on building rock-solid foundations across advanced statistics, machine learning lifecycles, and quantitative computational mathematics.
          </p>
          <p>
            Outside of university coursework, I spend my time exploring financial derivatives architectures, building automation scripts, and designing robust web environments to host data pipelines.
          </p>
        </div>

        {/* Right Column (1/3 width on desktop) for core engineering values */}
        <div className="rounded-2xl border border-slate-900 bg-slate-950/30 p-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
            Development Manifesto
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            The ultimate vision for my engineering stack is simple: create highly efficient, math-backed architectures that convert complex raw data arrays into functional operational realities.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 rounded-md bg-blue-950/40 px-2 py-1 text-[11px] font-mono text-blue-400 border border-blue-900/30 w-full justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              Focus: Math, ML, & Systems
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
