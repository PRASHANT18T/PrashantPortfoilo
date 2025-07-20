import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import allSkills from "../../assets/portfolioAssets/json/allSkills.json";


const SkillLangs = () => {
  const { category, id } = useParams();
  const selectedSkill = allSkills.find(
    (skill) => skill.category === category && skill.id === parseInt(id)
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!selectedSkill)
    return (
      <div className="text-center py-10 text-red-500 font-bold dark:text-red-400">
        Skill Not Found
      </div>
    );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto py-20   px-5  bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-500"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {/* Header */}
      <motion.div
        className="flex items-center gap-6 mb-8 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <img
          src={selectedSkill.img}
          alt={selectedSkill.langname}
          className="w-20 h-20 object-contain rounded-lg border shadow-sm dark:border-gray-600"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-1">
            {selectedSkill.langname}
          </h1>
          <p className="text-sm text-gray-500 italic dark:text-gray-400">
            {selectedSkill.certification === "certification img url"
              ? "No certification preview available"
              : "Certified"}
          </p>
        </div>
      </motion.div>

      {/* Certification Image */}
      {selectedSkill.certification !== "certification img url" && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-semibold">
            📜 Certification Preview:
          </p>
          <img
            src={selectedSkill.certification}
            alt={`${selectedSkill.langname} Certification`}
            className="w-full sm:w-96 max-h-72 object-contain rounded-lg border shadow-md hover:scale-105 transition duration-300 dark:border-gray-700"
          />
        </motion.div>
      )}

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-200 mb-4"
        variants={sectionVariants}
      >
        <strong>Description:</strong> {selectedSkill.description}
      </motion.p>

      {/* Experience */}
      <motion.p
        className="text-base text-gray-600 dark:text-gray-300 mb-4"
        variants={sectionVariants}
      >
        <strong>Experience:</strong> {selectedSkill.experience}
      </motion.p>

      {/* Blog Tip */}
      <motion.p
        className="text-sm text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-2 rounded-md shadow-sm mb-6"
        variants={sectionVariants}
      >
        <strong>Blog Tip:</strong> {selectedSkill.blog}
      </motion.p>

      {/* Progress Bars */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={sectionVariants}
      >
        {/* Fundamental Bar */}
        <div>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
            🔍 Fundamentals
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-3">
            <motion.div
              className="h-3 bg-cyan-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${selectedSkill.fundamentalrange}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {selectedSkill.fundamentalrange}% Mastery
          </p>
        </div>

        {/* Experience Bar */}
        <div>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
            🧪 Work Experience
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-3">
            <motion.div
              className="h-3 bg-amber-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${selectedSkill.workExperiencerange}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {selectedSkill.workExperiencerange}% Hands-on
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillLangs;
