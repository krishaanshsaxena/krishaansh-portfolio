// app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./constants";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("dark");

  // Sync state tracking on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem("site-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("site-theme", nextTheme);
    document.documentElement.className = nextTheme; // Updates root HTML element token instantly
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-900 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        <Link href="/" className="text-md font-bold text-slate-900 dark:text-white tracking-tight hover:text-blue-500 transition shrink-0">
          KS<span className="text-blue-500">.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`rounded-xl px-2.5 py-1.5 text-xs font-semibold tracking-wide transition duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600/10 text-blue-500 dark:text-blue-400 border border-blue-500/20"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Selector Toggle Pin Anchor Button */}
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition shrink-0 text-xs font-mono font-bold"
            aria-label="Toggle System Interface Theme"
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        </div>
      </div>
    </header>
  );
}
