import React from 'react';
import { motion } from 'framer-motion';

const AvailableForJobs = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-25 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-cyan-400 drop-shadow-sm"
        whileHover={{ scale: 1.05 }}
      >
        🚀 Available for Full-Time Jobs
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl leading-relaxed text-slate-200"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hi, I’m <span className="text-cyan-300 font-semibold">Prashant Thube</span> — a passionate Full Stack Developer 
        focused on frontend with strong backend fundamentals. I love crafting elegant, fast UIs using 
        <strong> React.js</strong>, <strong>Tailwind CSS</strong> and <strong>Java</strong> with 
        <strong> Spring Boot</strong>.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6 mt-10 w-full max-w-5xl">
        <motion.div
          className="bg-[#1e293b] p-6 rounded-xl border border-cyan-700/20 shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">🎯 My Career Focus</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Frontend magic with React, Tailwind, JS</li>
            <li>Clean UI, mobile-first, accessibility</li>
            <li>REST APIs with Java + Spring Boot</li>
            <li>Fast learner & problem solver</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-[#1e293b] p-6 rounded-xl border border-cyan-700/20 shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">🛠️ Skills Summary</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Languages: HTML, CSS, JS, Java</li>
            <li>Frameworks: React, Tailwind, Bootstrap</li>
            <li>Backend: Spring Boot, Node.js, Express</li>
            <li>Database: MySQL, MongoDB</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 bg-cyan-800/20 backdrop-blur-sm p-6 rounded-xl text-cyan-200 shadow-inner w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-center text-lg font-medium">
          💼 Looking for full-time roles where I can contribute, grow & build top-tier digital experiences 
          with a team that values <span className="italic text-cyan-300">clean code</span>, 
          <span className="italic text-cyan-300"> great design</span>, and 
          <span className="italic text-cyan-300"> strong collaboration</span>.
        </p>
      </motion.div>

      <motion.div
        className="mt-8"
        whileHover={{ scale: 1.1 }}
      >
        <a
          href="https://www.linkedin.com/in/prashant-thube/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-600 transition"
        >
          💼 Connect on LinkedIn
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AvailableForJobs;
