import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";

const Blog = ({ title, date, path }) => (
  <div>
    <Link to={path}>
      <h3
        style={{
          ...scale(0.25),
          marginBottom: rhythm(0.1)
        }}
      >
        {title}
      </h3>
    </Link>
    <p>{date}</p>
  </div>
);

export default Blog;
