import React from "react";
import { motion } from "framer-motion";

// 📸 15 Image Imports
// import img1 from "/src/assets/wonderway/img1.png";
// import img2 from "/src/assets/wonderway/img2.png";
// import img3 from "/src/assets/wonderway/img3.png";
// import img4 from "/src/assets/wonderway/img4.png";
// import img5 from "/src/assets/wonderway/img5.png";
// import img6 from "/src/assets/wonderway/img6.png";
// import img7 from "/src/assets/wonderway/img7.png";
// import img8 from "/src/assets/wonderway/img8.png";
// import img9 from "/src/assets/wonderway/img9.png";
// import img10 from "/src/assets/wonderway/img10.png";
// import img11 from "/src/assets/wonderway/img11.png";
// import img12 from "/src/assets/wonderway/img12.png";
// import img13 from "/src/assets/wonderway/img13.png";
// import img14 from "/src/assets/wonderway/img14.png";
// import img15 from "/src/assets/wonderway/img15.png";

// 🔄 Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const Project2 = () => {
  const screenshots = [
    // img1, img2, img3, img4, img5,
    // img6, img7, img8, img9, img10,
    // img11, img12, img13, img14, img15
  ];

  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-100 py-20 px-6 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🌍 Wonder Way – Travel & E-commerce Website
      </motion.h1>

      {/* Dynamic Sections */}
      {[
        {
          title: "📋 Project Summary",
          content: (
            <>
              <p><strong>Category:</strong> Travel & E-commerce Website</p>
              <p><strong>Development Time:</strong> 1 Week</p>
              <p><strong>Lines of Code:</strong> 6000+</p>
              <p><strong>Total Files:</strong> 24</p>
              <p><strong>Fully Responsive:</strong> Yes, all screen sizes</p>
              <p><strong>Originality:</strong> 100% unique design</p>
            </>
          ),
        },
        {
          title: "🌐 Website Purpose",
          content: (
            <p>
              Wonder Way helps users plan and manage their trips—flights, hotels,
              tickets—while offering a sleek shop for premium travel accessories.
            </p>
          ),
        },
        {
          title: "💡 Key Features",
          content: (
            <ul className="list-disc pl-6">
              <li>Trip booking: Flights, hotels, tickets</li>
              <li>Trip categories: Solo, Trekking, Family, History Tours</li>
              <li>Integrated store for travel products</li>
              <li>Responsive, user-friendly interface</li>
              <li>Fast-loading & performance optimized</li>
            </ul>
          ),
        },
        {
          title: "🛠️ Tech Stack",
          content: (
            <ul className="list-disc pl-6">
              <li><strong>HTML5</strong> – Semantic structure</li>
              <li><strong>Tailwind CSS</strong> – Utility-first responsive styling</li>
              <li><strong>JavaScript</strong> – Dynamic behavior</li>
              <li><strong>Git & GitHub</strong> – Version control & collab</li>
            </ul>
          ),
        },
        {
          title: "📁 Website Pages",
          content: (
            <ul className="list-disc pl-6">
              <li>Home – Trip categories & best-selling items</li>
              <li>Trips – Explore travel categories</li>
              <li>Shop – High-quality accessories</li>
              <li>Booking System – Flight/hotel/ticket bookings</li>
              <li>Contact – Inquiry & support</li>
            </ul>
          ),
        },
        {
          title: "🚧 Challenges & Solutions",
          content: (
            <>
              <p><strong>Challenges:</strong></p>
              <ul className="list-disc pl-6">
                <li>Building fully responsive design</li>
                <li>Managing large codebase</li>
                <li>Delivering intuitive user experience</li>
              </ul>
              <p className="mt-3"><strong>Solutions:</strong></p>
              <ul className="list-disc pl-6">
                <li>Tailwind CSS for clean scalable layout</li>
                <li>Modular structure for easy management</li>
                <li>Extensive testing & user-friendly design</li>
              </ul>
            </>
          ),
        },
        {
          title: "🔮 Future Enhancements",
          content: (
            <ul className="list-disc pl-6">
              <li>Online payment integration</li>
              <li>User profiles & personalized trips</li>
              <li>Advanced filtering & search</li>
              <li>AI-powered destination recommendations</li>
            </ul>
          ),
        },
        {
          title: "🎯 Summary for Interview",
          content: (
            <p>
              Wonder Way is a fully responsive, fast, and engaging travel platform built with
              HTML, Tailwind, and JavaScript—offering trip management and an integrated shop,
              all from scratch with zero template copying.
            </p>
          ),
        },
      ].map((section, i) => (
        <motion.section
          key={i}
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
        >
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            {section.title}
          </h2>
          <div className="text-gray-300">{section.content}</div>
        </motion.section>
      ))}

      {/* 🔥 Screenshot Gallery */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          📸 Website Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={src}
                alt={`Wonder Way Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Conclusion */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          🙏 Thank You!
        </h2>
        <p className="text-gray-300">
          Presented by: <strong>Prashant Thube</strong><br />
          Stack Used: <strong>HTML | Tailwind CSS | JavaScript</strong><br />
          Any Questions? Let’s vibe and dive! 💬
        </p>
      </motion.section>
    </div>
  );
};

export default Project2;
