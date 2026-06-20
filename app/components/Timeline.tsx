"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const journeySteps = [
    { step: 1, title: "Python Fundamentals", description: "Started learning Python basics and programming concepts" },
    { step: 2, title: "Statistics & Mathematics", description: "Built strong foundation in statistics for ML" },
    { step: 3, title: "Machine Learning Basics", description: "Explored supervised and unsupervised learning algorithms" },
    { step: 4, title: "Version Control", description: "Mastered Git and GitHub for collaborative development" },
    { step: 5, title: "Data Science", description: "Worked with data analysis and visualization tools" },
    { step: 6, title: "Android Development", description: "Expanded skills into mobile app development" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="journey"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">Learning</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          My progressive path to mastering AI/ML and software engineering
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8 relative"
      >
        {/* Animated Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-500 to-slate-600 hidden md:block origin-top"
        />

        {journeySteps.map((step, index) => (
          <motion.div
            key={step.step}
            variants={itemVariants}
            className="relative pl-24 md:pl-0 md:flex md:even:flex-row-reverse md:items-center md:mb-12"
          >
            {/* Animated Circle marker */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg border-4 border-slate-900 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer group"
            >
              <span className="group-hover:scale-125 transition-transform duration-300">
                {step.step}
              </span>
            </motion.div>

            {/* Content card */}
            <motion.div
              className={`md:w-5/12 ${
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-slate-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gradient-to-br from-blue-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
