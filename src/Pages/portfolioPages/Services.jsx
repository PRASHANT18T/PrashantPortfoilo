import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Globe2 } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-16 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        💼 My Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Freelance Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 border border-cyan-500 p-8 rounded-2xl shadow-md hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => navigate("/freelance")}
        >
          <div className="flex items-center gap-4 mb-4">
            <Globe2 className="text-cyan-400 w-7 h-7" />
            <h3 className="text-2xl font-semibold text-cyan-300">
              Freelance Projects
            </h3>
          </div>
          <p className="text-gray-300 text-sm">
            Available to take on exciting freelance work involving frontend
            magic, animations, and full website builds. Let’s collaborate and
            create stunning digital experiences! 💻✨
          </p>
        </motion.div>

        {/* Job Availability Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 border border-amber-400 p-8 rounded-2xl shadow-md hover:shadow-amber-300/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => navigate("/AvailableForJobs")}
        >
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="text-amber-300 w-7 h-7" />
            <h3 className="text-2xl font-semibold text-amber-200">
              Full-Time Job
            </h3>
          </div>
          <p className="text-gray-300 text-sm">
            Open to full-time roles where I can contribute my skills in React,
            Java, and frontend design systems. Let’s build scalable, modern
            applications together! 🏢🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};  

export default Services;
