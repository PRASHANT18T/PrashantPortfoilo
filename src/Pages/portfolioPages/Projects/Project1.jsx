import React from "react";
import { motion } from "framer-motion";
import img1 from "/src/assets/portfolioAssets/img/home1.png";
import img2 from "/src/assets/portfolioAssets/img/home.png";
import img3 from "/src/assets/portfolioAssets/img/category.png";
import img4 from "/src/assets/portfolioAssets/img/grid.png";
import img5 from "/src/assets/portfolioAssets/img/card1.png";
import img6 from "/src/assets/portfolioAssets/img/card2.png";
import img7 from "/src/assets/portfolioAssets/img/login.png";
import img8 from "/src/assets/portfolioAssets/img/sign in.png";
import img9 from "/src/assets/portfolioAssets/img/cart.png";
import img10 from "/src/assets/portfolioAssets/img/Payment.png";
import img11 from "/src/assets/portfolioAssets/img/profile.png";
import img12 from "/src/assets/portfolioAssets/img/orders.png";
import img13 from "/src/assets/portfolioAssets/img/footer.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const Project1 = () => {
  const screenshots = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];

  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-100 py-20 px-6 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🛍️ LaceUp Project – Full Stack E-commerce Website
      </motion.h1>

      {/* Dynamic Sections */}
      {[
        {
          title: "🛒 Project Summary",
          content: (
            <>
              <p>
                <strong>Type:</strong> Full-stack e-commerce web app
              </p>
              <p>
                <strong>Frontend:</strong> React, Tailwind CSS, Axios, React
                Router
              </p>
              <p>
                <strong>Backend:</strong> Spring Boot (Java), Stripe Payment
                Gateway
              </p>
              <p>
                <strong>Build Tools:</strong> Vite, Maven
              </p>
              <p>
                <strong>Database:</strong> MySQL or H2
              </p>
            </>
          ),
        },
        {
          title: "🌐 Website Purpose",
          content: (
            <p>
              This website sells top-brand sneakers. Users can browse, add to
              cart, authenticate, and securely pay via Stripe.
            </p>
          ),
        },
        {
          title: "🧠 Frontend Workflow",
          content: (
            <ul className="list-disc pl-6">
              {[
                "Navbar with search, cart & login",
                "Carousel + offer banners on home",
                "Product grid with detail view",
                "Sign in / Sign up flow",
                "User order history page",
                "Cart page with size & price logic",
                "Secure Stripe checkout",
                "Footer with info links",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: "🔧 Backend Logic",
          content: (
            <ul className="list-disc pl-6">
              <li>Spring Security-based Auth</li>
              <li>Product/Cart/Order APIs</li>
              <li>Stripe Payment flow</li>
            </ul>
          ),
        },
        // {
        //   title: "🗂️ File Structure",
        //   content: (
        //     <ul className="list-disc pl-6">
        //       <li>components/</li>
        //       <li>pages/</li>
        //       <li>context/</li>
        //       <li>services/</li>
        //       <li>assets/images/</li>
        //       <li>vite.config.js</li>
        //     </ul>
        //   ),
        // },
        {
          title: "🎯 Summary for Interview",
          content: (
            <p>
              A full-stack e-commerce app with sleek design, powerful backend,
              and seamless user experience using Stripe, Tailwind, React Context
              and Spring Boot.
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
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">
            {section.title}
          </h2>
          <div className="text-gray-300">{section.content}</div>
        </motion.section>
      ))}

      {/* Screenshots */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-pink-400">
          📸 Screenshots
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
                alt={`Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-fit transition-opacity duration-300 group-hover:opacity-80"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Screenshot {index + 1}
              </div> */}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Project1;
