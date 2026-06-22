import Link from "next/link";
import { HERO } from "./site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/">
          <div>
            <p className="font-semibold text-slate-100">
              Krishaansh Saxena
            </p>

            <p className="text-xs text-slate-400">
              {HERO.subtitle}
            </p>
          </div>
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/krishaanshsaxena"
            target="_blank"
            className="text-slate-300 hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/krishaansh-saxena/"
            target="_blank"
            className="text-slate-300 hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}