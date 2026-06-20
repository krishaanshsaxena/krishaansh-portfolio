"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function FutureProjects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "News Aggregator App",
      description: "A mobile application that aggregates news from multiple sources using AI-powered categorization and personalized recommendations.",
      icon: "📰",
      tags: ["Python", "Machine Learning", "Mobile App"],
    },
    {
      title: "Stock Market Dashboard",
      description: "A real-time dashboard for analyzing stock market trends with predictive analytics and machine learning models.",
      icon: "📈",
      tags: ["Python", "Data Science", "Web App"],
    },
    {
      title: "AI Assistant",
      description: "A conversational AI assistant built with NLP and deep learning to help with various tasks and queries.",
      icon: "🤖",
      tags: ["NLP", "Deep Learning", "AI"],
    },
    {
      title: "Machine Learning Projects",
      description: "Various ML projects exploring different domains including computer vision, reinforcement learning, and predictive modeling.",
      icon: "🧠",
      tags: ["Machine Learning", "CV", "RL"],
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
      id="projects"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">Future</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Exciting and innovative projects I'm planning to build and deploy
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative h-full"
            whileHover={{ y: -12 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-slate-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-full bg-gradient-to-br from-blue-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
              {/* Coming Soon Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4"
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-200 border border-blue-500/50 backdrop-blur">
                  🚀 Coming Soon
                </span>
              </motion.div>

              <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-slate-700/20 text-blue-300 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
