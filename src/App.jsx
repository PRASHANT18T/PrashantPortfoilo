// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/portfolioPages/Home";
import About from "./pages/portfolioPages/AboutCard";
import ProjectCards from "./pages/portfolioPages/ProjectCards";
import ContactForm from "./pages/portfolioPages/ContactForm";

import Project1 from "./pages/portfolioPages/projects/Project1";
import Project2 from "./pages/portfolioPages/projects/Project2";
import Project3 from "./pages/portfolioPages/projects/Project3";
import Project4 from "./pages/portfolioPages/projects/Project4";
import SkillLangs from "./pages/portfolioPages/SkillLangs";
import AvailableForJobs from "./pages/portfolioPages/AvailableForJobs";
import Freelance from "./Pages/portfolioPages/Freelance";
import BlogsCart from "./Pages/portfolioPages/BlogsCart";
import NotFound from "./pages/portfolioPages/NotFound";
import BlogDetails from "./pages/portfolioPages/Blogs";

function App() {
  return (
    <Routes>
      {/* All these routes render inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ProjectCards" element={<ProjectCards />} />
        <Route path="ContactForm" element={<ContactForm />} />
        <Route path="BlogsCart" element={<BlogsCart />} />
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
