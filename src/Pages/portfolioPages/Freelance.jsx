import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Freelance = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-25 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-4 animate-pulse">
        💼 Freelance Services
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
        I'm currently available for freelance opportunities 🚀. Whether it's a sleek website,
        a custom web app, or a frontend revamp — I'm here to help bring your ideas to life!
      </p>

      <div className="grid sm:grid-cols-2 gap-6 text-sm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg shadow-inner border border-cyan-800"
        >
          <h3 className="text-lg font-semibold text-cyan-400 mb-1">🌐 Web Development</h3>
          <p className="text-gray-400">Responsive websites using React, Tailwind & modern stacks.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg shadow-inner border border-yellow-600"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-1">🎨 UI/UX Design</h3>
          <p className="text-gray-400">Clean interfaces with smooth animations & UX polish.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg shadow-inner border border-green-600"
        >
          <h3 className="text-lg font-semibold text-green-400 mb-1">📈 Portfolio & Business Sites</h3>
          <p className="text-gray-400">Personal brand, freelancer, or startup websites that pop!</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg shadow-inner border border-purple-600"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-1">⚙️ API Integration</h3>
          <p className="text-gray-400">Add functionality with custom or third-party APIs.</p>
        </motion.div>
      </div>

      <div className="flex gap-4 justify-center mt-8 flex-wrap">
        {/* Contact Page Route */}
        <Link
          to="/ContactForm"
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
        >
          📩 Contact Form
        </Link>

        {/* External LinkedIn */}
        <a
          href="https://linkedin.com/in/prashant-thube"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
        >
          🔗 LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default Freelance;
