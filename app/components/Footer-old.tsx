// app/components/Footer.tsx
import { SITE_OWNER, COPYRIGHT_YEAR, socialItems } from "./constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950/20 py-8 mt-auto">
      {/* max-w-6xl perfectly matches your navbar and main grid lines */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        
        {/* Left Side: Dynamic Copyright Status */}
        <div>
          &copy; {COPYRIGHT_YEAR} {SITE_OWNER}. All system logs cleared.
        </div>

        {/* Right Side: Quick Horizontal Links */}
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
