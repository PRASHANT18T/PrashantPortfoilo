import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 py-20">
      {/* 🧑‍💼 Header */}
      <h1 className="text-4xl font-bold mb-4 tracking-wide animate-pulse">
        My Resume
      </h1>
    

      {/* 📥 Download Button */}
      <a
        href="resume.pdf"
        download="Prashant_Thube_Resume.pdf"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 mb-8"
      >
        ⬇️ Download Resume
      </a>

      {/* 👀 Embedded Resume Preview */}
      <div className="w-full max-w-4xl h-[600px] shadow-2xl rounded-xl overflow-hidden border border-cyan-500">
        <iframe
          src="resume.pdf"
          title="Resume"
          className="w-full h-full border-none"
        />
      </div>

      {/* 🔚 Footer Line */}
      <p className="mt-10 text-sm text-gray-400">
        Designed with 💙 by <span className="text-cyan-400 font-semibold">Prashant Thube</span>
      </p>
    </div>
  );
};

export default Resume;
