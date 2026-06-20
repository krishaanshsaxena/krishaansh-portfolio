"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-blue-500/20 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent backdrop-blur">
      <div className="max-w-6xl mx-auto px-0 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
              KS
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left leading-relaxed">
              Rising AI/ML Engineer<br />Building the Future
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-center">
              {["About", "Skills", "Journey", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="https://github.com/krishaanshsaxena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-slate-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:border-blue-500/60 transition-all duration-200 group"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 group-hover:text-blue-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                href="https://www.linkedin.com/in/krishaansh-saxena/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-slate-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:border-blue-500/60 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 group-hover:text-blue-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.191-1.563 2.897-1.563 2.12 0 3.708 1.38 3.708 4.35v5.511zM5.337 9.432c-1.144 0-1.915-.759-1.915-1.71 0-.954.768-1.71 1.959-1.71 1.19 0 1.916.759 1.935 1.71 0 .951-.745 1.71-1.979 1.71zm1.582 11.02H3.771V9.806h3.148v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8 origin-left"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-slate-400 text-sm">
            Crafted with <span className="text-blue-400 font-semibold">❤️</span> using{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-400 font-semibold">React</span>, and{" "}
            <span className="text-blue-400 font-semibold">Tailwind CSS</span>
          </p>
          <p className="text-slate-500 text-xs">
            © {currentYear} Krishaansh Pushkarprabhat Saxena. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
