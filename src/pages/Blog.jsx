// src/pages/BlogPost.jsx
import React from "react";
import BlogPostLayout from "../components/BlogPostLayout";

export default function BlogPost() {
  const post = {
    title: "Top 5 Energy-Efficient HVAC Upgrades for 2024",
    date: "2024-03-15",
    dateFormatted: "March 15, 2024",
    tags: ["Energy Efficiency", "HVAC", "California"],
    image: "https://source.unsplash.com/random/1600x900/?airconditioner",
  };

  return (
    <BlogPostLayout post={post}>
      <h2>Introduction</h2>
      <p>Your blog content here...</p>

      {/* Content sections */}

      <h2>Conclusion</h2>
      <p>Final thoughts and call to action...</p>
    </BlogPostLayout>
  );
}
