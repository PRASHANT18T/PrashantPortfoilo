import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import allSkills from "../../assets/portfolioAssets/json/allSkills.json";

const Skills = () => {
  const navigate = useNavigate();

  const frontendSkills = allSkills.filter((skill) => skill.category === "frontend");
  const backendSkills = allSkills.filter((skill) => skill.category === "backend");
  const databaseSkills = allSkills.filter((skill) => skill.category === "database");

  const RangeCard = ({ skill, delay = 0 }) => {
    const handleClick = () => {
      navigate(`/skills/${skill.category}/${skill.id}`);
    };

    return (
      <motion.div
        onClick={handleClick}
        className="cursor-pointer relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all group overflow-hidden min-h-[170px] "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Top - Logo + Title */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src={skill.img}
            alt={skill.langname}
            className="w-8 h-8 object-contain"
          />
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-100">
            {skill.langname}
          </h3>
        </div>

        {/* Fundamentals */}
        <div className="mb-1">
          <label className="text-xs text-gray-600 dark:text-gray-400">🔍 Fundamentals</label>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded h-1.5 mt-0.5">
            <motion.div
              className="h-1.5 bg-cyan-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.fundamentalrange}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-300">{skill.fundamentalrange}%</span>
        </div>

        {/* Work Experience */}
        <div>
          <label className="text-xs text-gray-600 dark:text-gray-400">🧪 Work Experience</label>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded h-1.5 mt-0.5">
            <motion.div
              className="h-1.5 bg-amber-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.workExperiencerange}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-300">{skill.workExperiencerange}%</span>
        </div>
      </motion.div>
    );
  };

  const Section = ({ title, data }) => (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-5">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((skill, i) => (
          <RangeCard key={skill.id} skill={skill} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-4 py-16 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">🛠️ My Skills</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Here's a collection of frontend, backend, and database technologies I work with.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Section title="💻 Frontend Skills" data={frontendSkills} />
        <Section title="⚙️ Backend Skills" data={backendSkills} />
        <Section title="🗄️ Database Skills" data={databaseSkills} />
      </div>
    </div>
  );
};

export default Skills;
