"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", icon: "👤" },
    { label: "Education", href: "#education", icon: "🎓" },
    { label: "Skills", href: "#skills", icon: "💻" },
    { label: "Journey", href: "#journey", icon: "🚀" },
    { label: "Projects", href: "#projects", icon: "🛠️" },
    { label: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-10 ${
        isScrolled
          ? "bg-gradient-to-b from-slate-900/98 to-slate-900/80 backdrop-blur-lg"
          : "bg-gradient-to-b from-slate-900/80 to-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto w-full px-0 sm:px-0 lg:px-0 py-4 flex items-center justify-between border-2 border-blue-500/30 rounded-lg mt-3 bg-slate-900/50 backdrop-blur-md">
        {/* Branding Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-0.5 min-w-0"
        >
          <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent truncate">
            Krishaansh Saxena
          </div>
          <div className="text-xs sm:text-xs font-semibold text-cyan-400/80 truncate">
            AI/ML Engineer
          </div>
        </motion.div>

        {/* Navigation Items - Hidden on Mobile, Visible on Large Screens */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                href={item.href}
                className="relative px-3 py-2 text-sm text-slate-200 hover:text-white transition-all duration-300 font-bold group flex items-center gap-1.5 rounded-lg hover:bg-blue-500/15"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden xl:inline">{item.label}</span>
                <motion.span
                  className="absolute bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 rounded-full"
                  whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons - Responsive Sizing */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 sm:gap-3 ml-2 sm:ml-0"
        >
          <motion.a
            href="https://github.com/krishaanshsaxena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-300 hover:text-blue-100 transition-all duration-200 text-xs sm:text-sm font-bold border-2 border-blue-500/40 hover:border-blue-400/60 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/krishaansh-saxena/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </nav>

      {/* Animated gradient line at bottom */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        animate={{ opacity: isScrolled ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
}
