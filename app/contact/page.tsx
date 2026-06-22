// app/contact/page.tsx
import { socialItems } from "@/app/components/constants";

export const metadata = {
  title: "Contact | Krishaansh Saxena",
};

export default function ContactPage() {
  return (
    <div className="py-16 max-w-xl mx-auto px-4 text-center space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get in touch
        </h1>
        <p className="text-slate-400 max-w-sm mx-auto leading-relaxed text-sm sm:text-base">
          Whether you want to discuss mathematical data pipelines, quantitative engineering systems, or machine learning frameworks—let's talk.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-3 pt-6 border-t border-slate-900">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/40 p-5 hover:border-slate-700 hover:bg-slate-950/80 transition duration-200 group"
          >
            <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition duration-200">
              {item.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 mt-1 font-medium tracking-wide uppercase">
              Connect &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
