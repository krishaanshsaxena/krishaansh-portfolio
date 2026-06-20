"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-0 w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
            🚀 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-slate-100">Hey, I'm</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Krishaansh
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
        >
          Rising AI/ML Engineer in Training
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Second-year B.Tech Computer Science Engineering student specializing in
          Artificial Intelligence and Machine Learning at KIIT University. Passionate
          about building intelligent systems, solving real-world problems, and pushing
          the boundaries of what's possible with AI.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 mb-12 font-medium text-lg"
        >
          Expected Graduation: <span className="text-blue-400 font-semibold">June 2029</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#about"
            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <span className="relative">Explore My Journey →</span>
          </Link>
          <a
            href="https://github.com/krishaanshsaxena"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-blue-400 font-semibold border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1"
          >
            GitHub <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/krishaansh-saxena/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-blue-400 font-semibold border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1"
          >
            LinkedIn <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-400"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
