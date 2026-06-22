// app/contact/page.tsx
import { socialItems } from "../components/constants"; // Using direct relative path

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-16 max-w-xl mx-auto text-center space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get in touch
        </h1>
        <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
          Let's discuss mathematical data structures, quantitative engineering models, or machine learning pipelines.
        </p>
      </header>

      {/* Renders your live arrays explicitly */}
      <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-3 pt-6 border-t border-slate-900">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/40 p-5 hover:border-slate-500 hover:bg-slate-950/90 transition duration-200 group"
          >
            <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition">
              {item.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 mt-1 uppercase tracking-wider">
              Open Link &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
