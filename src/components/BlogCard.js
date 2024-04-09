import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">10 Jan, 2024</p>
        <h5 className="title"> A beautiful Sunday morning renaissance.</h5>
        <p className="desc">
          The sun crept over the horizon, painting the sky with strokes of pink
          and gold, signaling the arrival of a...
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
