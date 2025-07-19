import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page Not Found 😢</p>

      <Link
        to="/"
        className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition"
      >
        ⬅️ Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
