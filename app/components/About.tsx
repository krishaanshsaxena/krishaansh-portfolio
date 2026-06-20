"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Software Engineering",
    "Quantitative Finance",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">About</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Get to know my story, interests, and what drives my passion for technology
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a passionate and driven computer science student specializing in
            Artificial Intelligence and Machine Learning. My journey into tech
            started with curiosity about how systems learn, and it has evolved into
            a deep commitment to building solutions that make a real impact.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            I believe in continuous learning and I'm always eager to explore emerging
            technologies. Whether it's developing machine learning models, architecting
            software solutions, or diving into quantitative finance, I approach every
            challenge with enthusiasm, creativity, and dedication.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            Beyond academics, I'm committed to staying at the forefront of AI/ML
            innovations and contributing to meaningful projects that create tangible
            value and solve real-world challenges.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-blue-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400">
                  My Interests
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4"
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    variants={itemVariants}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover/item:scale-150 transition-transform duration-300" />
                    <span className="text-slate-200 group-hover/item:text-blue-300 transition-colors duration-300 font-medium">
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
