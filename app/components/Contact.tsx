"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactLinks = [
    {
      icon: "GitHub",
      label: "GitHub",
      url: "https://github.com/krishaanshsaxena",
      description: "Check out my projects and contributions",
    },
    {
      icon: "LinkedIn",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/krishaansh-saxena/",
      description: "Connect with me professionally",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-0 max-w-6xl mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-slate-100">Get In</span>
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          I'm always open to new opportunities, collaborations, and connecting with
          like-minded professionals. Let's build something amazing together!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-6 max-w-2xl mx-auto"
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-slate-600/10 to-blue-600/30 opacity-0 group-hover:opacity-100 transition duration-500 blur" />
              <div className="relative bg-gradient-to-r from-blue-500/10 to-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {link.label}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {link.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-4"
                  >
                    <svg
                      className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
