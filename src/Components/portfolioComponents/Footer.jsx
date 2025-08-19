import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900     text-white pt-12  pb-6 px-6 sm:px-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src="/assets/portfolioAssets/img/logo.png" // 🖼 change path if needed
            alt="Logo"
            className="w-20 h-20 mb-3 rounded-full shadow-lg"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            I'm Prashant Thube — a passionate full stack developer who loves building
            beautiful, functional, and interactive web experiences. Let's create magic together!
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🌐 Web Development</li>
            <li>🎨 UI/UX Design</li>
            <li>📱 Responsive Layouts</li>
            <li>⚙️ API Integration</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-cyan-500 transition">🏠 Home</a></li>
            <li><a href="/about" className="hover:text-cyan-500 transition">👤 About</a></li>
            <li><a href="/projects" className="hover:text-cyan-500 transition">📁 Projects</a></li>
            <li><a href="/ContactForm" className="hover:text-cyan-500 transition">📬 Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Let's Connect</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="mailto:prashantportfoliomails@gmail.com" className="hover:text-red-400 transition"><FaEnvelope /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/prashant-thube" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Prashant Thube | Crafted with ❤️ by Prashant
      </p>
    </footer>
  );
};

export default Footer;
