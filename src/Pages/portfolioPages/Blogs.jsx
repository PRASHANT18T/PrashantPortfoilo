// src/pages/portfolioPages/BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../assets/portfolioAssets/json/blogData.json";

const BlogDetails = () => {
  const { id, title } = useParams();
  const blog = blogData.find(
    (item) =>
      item.id === parseInt(id) &&
      item.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!blog)
    return (
      <div className="text-center mt-20 text-red-600 text-xl font-bold">
        😢 Blog not found. Check your link!
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-30 px-6 ">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-gray-600 mb-2 font-medium">✍️ By {blog.author}</p>
      <div className="text-sm text-cyan-600 mb-4">
        {blog.tags.map((tag, idx) => (
          <span key={idx} className="mr-2">#{tag}</span>
        ))}
      </div>
      <p className="text-gray-700 leading-7 whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetails;
