"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "Java"],
      icon: "💻",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
      icon: "🛠️",
    },
    {
      category: "Currently Learning",
      skills: ["Machine Learning", "Statistics", "NumPy", "Pandas"],
      icon: "📚",
    },
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
      id="skills"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">Skills &</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="relative group h-full"
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-slate-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-full bg-gradient-to-br from-blue-500/5 via-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex-grow">
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/item:scale-150 group-hover/item:from-blue-300 group-hover/item:to-cyan-300 transition-all duration-300" />
                    <span className="text-slate-200 group-hover/item:text-blue-300 transition-colors duration-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
