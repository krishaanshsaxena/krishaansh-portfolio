// app/contact/page.tsx
import { socialItems } from "@/app/components/constants";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-10 space-y-10 max-w-6xl mx-auto w-full">
      {/* Page Title */}
      <div className="space-y-1 border-b border-slate-900/60 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get In Touch
        </h1>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-2">
          Secure API Connection Endpoints
        </p>
      </div>

      <div className="max-w-2xl space-y-8">
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Whether you want to discuss mathematical data structures, quantitative engineering models, or machine learning pipelines—feel free to drop a message through any of the structural endpoints below.
        </p>
        
        {/* Responsive link matrices */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-900 bg-slate-950/40 p-5 hover:border-slate-800 hover:bg-slate-950/80 transition duration-200 group"
            >
              <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-2 tracking-wider uppercase">
                Connect &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
