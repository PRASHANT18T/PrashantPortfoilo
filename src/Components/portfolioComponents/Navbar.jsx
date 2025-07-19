// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const navbarVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const linkClass =
//     "relative uppercase text-sm font-medium cursor-pointer transition hover:text-amber-400 px-2 py-1";
//   const activeClass = "text-amber-400";

//   const underline = `
//     before:content-[''] before:absolute before:bottom-0 before:left-0 
//     before:w-0 hover:before:w-full before:h-[2px] before:bg-amber-400 
//     before:transition-all before:duration-300 before:ease-in-out
//   `;

//   return (
//     <motion.nav
//       variants={navbarVariants}
//       initial="hidden"
//       animate="visible"
//       className=" backdrop-blur-md bg-gray-900/50 text-white shadow-lg fixed top-0 left-0 w-full z-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-2xl font-bold uppercase tracking-widest text-amber-400"
//         >
//           Prashant
//         </motion.div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex gap-6">
//           {["/", "/About", "/ProjectCards", "/ContactForm", "/Blogs"].map((path) => {
//             const label = path === "/" ? "Home" : path.replace("/", "");
//             return (
//               <NavLink
//                 key={path}
//                 to={path}
//                 className={({ isActive }) =>
//                   `${linkClass} ${underline} ${isActive ? activeClass : ""}`
//                 }
//               >
//                 {label}
//               </NavLink>
//             );
//           })}
//         </ul>

//         {/* Desktop Right Side */}
//         <div className="hidden md:block text-amber-400 font-semibold">Upcoming 🚧</div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden text-3xl cursor-pointer text-amber-400" onClick={toggleMenu}>
//           {isOpen ? "✖️" : "☰"}
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.ul
//             className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium uppercase bg-gray-900/90 backdrop-blur"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {["/", "/About", "/ProjectCards", "/ContactForm", "/Blogs"].map((path) => {
//               const label = path === "/" ? "Home" : path.replace("/", "");
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `${linkClass} ${underline} ${isActive ? activeClass : ""}`
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               );
//             })}
//             <li className="text-amber-400 font-medium mt-2">Upcoming 🚧</li>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkClass =
    "relative uppercase text-sm font-medium cursor-pointer transition hover:text-amber-400 px-2 py-1 p-5";
  const activeClass = "text-amber-400";

  const underline = `
    before:content-[''] before:absolute before:bottom-0 before:left-0 
    before:w-0 hover:before:w-full before:h-[2px] before:bg-amber-400 
    before:transition-all before:duration-300 before:ease-in-out
  `;

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className=" backdrop-blur-md bg-gray-900/50 text-white shadow-lg fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold uppercase tracking-widest text-amber-400"
        >
          Prashant
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Home</NavLink>
          <NavLink to="/About" className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>About</NavLink>
          <NavLink to="/ProjectCards" className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Projects</NavLink>
          <NavLink to="/ContactForm" className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Contact</NavLink>
          <NavLink to="/BlogsCart" className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Blogs</NavLink>
        </ul>

        {/* Right-side badge */}
        <div className="hidden md:block text-amber-400 font-semibold">Upcoming 🚧</div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-3xl cursor-pointer text-amber-400" onClick={toggleMenu}>
          {isOpen ? "✖️" : "☰"}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium uppercase bg-gray-900/90 backdrop-blur"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Home</NavLink>
            <NavLink to="/About" onClick={closeMenu} className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>About</NavLink>
            <NavLink to="/ProjectCards" onClick={closeMenu} className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Projects</NavLink>
            <NavLink to="/ContactForm" onClick={closeMenu} className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Contact</NavLink>
            <NavLink to="/BlogsCart" onClick={closeMenu} className={({ isActive }) => `${linkClass} ${underline} ${isActive ? activeClass : ""}`}>Blogs</NavLink>
            <li className="text-amber-400 font-medium mt-2">Upcoming 🚧</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
