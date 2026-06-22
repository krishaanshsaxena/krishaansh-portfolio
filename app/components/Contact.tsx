// app/components/Contact.tsx
import { socialItems } from "./constants";

export default function Contact() {
  return (
    <section className="py-10 border-b border-slate-900/60 last:border-b-0">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Get In Touch
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Communication Endpoints
        </p>
      </div>

      <div className="max-w-2xl">
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Whether you want to discuss advanced data pipelines, quantitative engineering models, or machine learning implementations—feel free to reach out.
        </p>
        
        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-900 bg-slate-950/40 p-4 hover:border-slate-800 hover:bg-slate-950/80 transition duration-200 group"
            >
              <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition duration-200">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-1 tracking-wider uppercase">
                Connect
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
