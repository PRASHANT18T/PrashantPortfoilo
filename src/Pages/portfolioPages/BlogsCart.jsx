// src/pages/portfolioPages/BlogsCart.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../assets/portfolioAssets/json/Blogdata.json";

const BlogsCart = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600 dark:text-cyan-400 animate-bounce">
        📚 My Tech Blogs
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <Link
            to={`/blogs/${blog.id}/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
            key={blog.id}
            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg overflow-hidden transform transition hover:-translate-y-2 duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-cyan-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                {blog.desc}
              </p>
              <span className="inline-block mt-3 text-cyan-600 dark:text-yellow-400 font-medium hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsCart;
