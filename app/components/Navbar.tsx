// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Branding Logo */}
        <Link href="/" className="text-md font-bold text-white tracking-tight hover:text-blue-500 transition">
          KS<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold tracking-wide transition duration-200 ${
                  isActive
                    ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
