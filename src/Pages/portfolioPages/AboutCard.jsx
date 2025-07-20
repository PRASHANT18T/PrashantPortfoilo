import React from "react";
import { motion } from "framer-motion";
import FullStackCertificate from "../../assets/portfolioAssets/img/FullStackcertificate.jpg";
 // Adjust the path as needed
import {
  FaHeart,
  FaCode,
  FaFeatherAlt,
  FaMapMarkedAlt,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

const AboutCard = () => {
  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-lg rounded-3xl border border-gray-200 dark:border-gray-700 px-8 py-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-1">Prashant Thube</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Dev | Frontend Lover | Backend Builder
          </p>
        </div>

        {/* Section: Summary */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm a passionate full-stack developer with a sweet spot for frontend animation, visuals, and interactivity.
            Currently trained in HTML, CSS, JavaScript, React, Tailwind CSS, Three.js, Spring Boot & MongoDB.
            I’m self-driven, creative, and always experimenting with cool libraries. I write poetry, love nature,
            and live like a calm warrior monk with a laptop. 💻🌿
          </p>
        </motion.div>
        {/* Certificate Section */}
<motion.div
  className="mb-6 mt-6"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
    🎓 My Full Stack Certificate
  </h2>
  <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-300 dark:border-gray-700">
    <img
      src={FullStackCertificate}
      alt="Full Stack Certificate - IT Vedant"
      className="w-full object-cover"
    />
  </div>
</motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaBrain /> Education
            </h2>
            <ul className="list-disc list-inside">
              <li>10th - 67.20% (2016)</li>
              <li>ITI Electrician (2016–2018)</li>
              <li>12th - 70.32% (2021)</li>
              <li>Full Stack Dev - IT Vedant Institute (2025)</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaLaptopCode /> Skills
            </h2>
            <ul className="list-disc list-inside">
              <li>Frontend: HTML, CSS, Tailwind, React, Three.js</li>
              <li>Backend: Java, Spring Boot, Node.js</li>
              <li>Database: MongoDB, MySQL</li>
              <li>Design: Figma, Bootstrap</li>
            </ul>
          </div>

          {/* Personality */}
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaHeart /> Personality & Goals
            </h2>
            <p>
              Silent, hardworking, and grounded. Focused on communication, kindness, and ego-free growth.
              Dreaming of a peaceful, creative, freelance dev life—where mind, money, and heart all stay in balance.
            </p>
          </div>

          {/* Hobbies */}
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaFeatherAlt /> Hobbies
            </h2>
            <ul className="list-disc list-inside">
              <li>Writing: Shayari, stories, poems</li>
              <li>Tech Learning & AI</li>
              <li>Traveling to nature & forts</li>
              <li>Music instruments (piano, flute)</li>
              <li>Sports: Cricket, Chess, Volleyball</li>
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <FaMapMarkedAlt />
          <span>Currently based in India 🌏</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
