// app/resume/page.tsx
import { skillGroups, timeline } from "@/app/components/constants";
import Link from "next/link";

export const metadata = {
  title: "Resume | Krishaansh Saxena",
};

export default function ResumePage() {
  return (
    <div className="py-12 max-w-3xl mx-auto px-4 space-y-12">
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Resume</h1>
          <p className="text-slate-400 mt-1">Academic focus and technical engineering stack.</p>
        </div>
        <button 
          disabled 
          className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-500 cursor-not-allowed"
        >
          PDF Copy Coming Soon
        </button>
      </div>

      {/* Education & Experience Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-500 tracking-tight">Education</h2>
        <div className="space-y-6 border-l-2 border-slate-800 pl-4 py-1">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-blue-500 ring-4 ring-slate-950" />
              <h3 className="text-xl font-bold text-white">{item.institution}</h3>
              <p className="text-slate-300 font-medium text-sm mt-0.5">{item.degree}</p>
              <p className="text-slate-500 text-xs mt-1 font-mono uppercase tracking-wider">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skill Matrices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-500 tracking-tight">Skills & Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-slate-800 bg-slate-950/20 p-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-linking Action Block */}
      <section className="rounded-2xl border border-blue-900/30 bg-blue-950/10 p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Looking for live code implementations?</h3>
          <p className="text-sm text-slate-400">Explore the exact architectures behind my academic learning models.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex-shrink-0">
          <Link 
            href="/projects" 
            className="inline-block rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition duration-200"
          >
            Explore Projects
          </Link>
        </div>
      </section>

    </div>
  );
}
