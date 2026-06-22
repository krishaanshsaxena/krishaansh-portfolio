"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";



export default function Education() {
  const ref = useRef(null);
  
  // Framer Motion configuration syntax
  const inView = useInView(ref, {
    once: true, // This is Framer Motion's version of triggerOnce
    amount: 0.2, // This is Framer Motion's version of threshold
  });

  const educationData = [
    {
      institution: "KIIT University",
      degree: "B.Tech Computer Science Engineering",
      specialization: "Specialization: AI and Machine Learning",
      duration: "2025 – 2029",
      location: "Bhubaneswar, India",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">Education</span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          My academic journey and specialization
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8 max-w-3xl mx-auto"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-slate-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-blue-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-lg">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-slate-200 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-blue-300/80 mb-4 font-medium">{edu.specialization}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-9h10v2H7z" />
                      </svg>
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}