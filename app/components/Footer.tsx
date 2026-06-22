// app/components/Footer.tsx
import { SITE_OWNER, COPYRIGHT_YEAR, socialItems } from "./constants";

export default function Footer() {
  return (
    // "fixed bottom-0" locks it, "backdrop-blur-md" keeps background text readable underneath
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-4">
      {/* max-w-6xl perfectly lines up with your header alignment tracks */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
        
        {/* Left Side: System status indicator */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>&copy; {COPYRIGHT_YEAR} {SITE_OWNER}. All systems operational.</span>
        </div>

        {/* Right Side: Quick Channels */}
        <div className="flex items-center gap-4">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
