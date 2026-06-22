import { timeline } from "./constants";

export default function Timeline() {
  return (
    <section className="py-10 border-b border-slate-900/60">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Academic Milestones</h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">Timeline Data Logging</p>
      </div>

      <div className="border-l border-slate-800 ml-2 pl-6 space-y-6">
        {timeline.map((item, index) => (
          <div key={index} className="relative">
            {/* The structural node point indicator */}
            <div className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-blue-500 ring-4 ring-slate-950" />
            <h3 className="text-md font-bold text-white">{item.institution}</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">{item.degree}</p>
            <p className="text-[10px] font-mono font-bold text-slate-500 mt-1 uppercase tracking-wider">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
