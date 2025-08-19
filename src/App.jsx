// src/App.jsx //
import React from "react"; 
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/portfolioPages/Home.jsx";
import About from "./Pages/portfolioPages/AboutCard";
import ProjectCards from "./Pages/portfolioPages/ProjectCards";
import Skills from "./Pages/portfolioPages/Skills";
import ContactForm from "./Pages/portfolioPages/ContactForm";
import Resume from "./Pages/portfolioPages/Resume";
import Project1 from "./Pages/portfolioPages/projects/Project1";
import Project2 from "./Pages/portfolioPages/projects/Project2";
import Project3 from "./Pages/portfolioPages/projects/Project3";
import Project4 from "./Pages/portfolioPages/projects/Project4";
import SkillLangs from "./Pages/portfolioPages/SkillLangs";
import AvailableForJobs from "./Pages/portfolioPages/AvailableForJobs";
import Freelance from "./Pages/portfolioPages/Freelance";
import BlogsCart from "./Pages/portfolioPages/BlogsCart";
import NotFound from "./Pages/portfolioPages/NotFound";
import BlogDetails from "./Pages/portfolioPages/Blogs";

function App() { 
  return (
    <Routes>
      {/* All these routes render inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ProjectCards" element={<ProjectCards />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="ContactForm" element={<ContactForm />} />
        <Route path="BlogsCart" element={<BlogsCart />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="/skills/:category/:id" element={<SkillLangs />} />
        <Route path="AvailableForJobs" element={<AvailableForJobs />} />
        <Route path="freelance" element={<Freelance />} />
          <Route path="blogs/:id/:title" element={<BlogDetails />} />

        {/* 404 fallback, optional */}
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
