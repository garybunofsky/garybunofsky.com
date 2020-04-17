import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";

const Blog = ({ title, date, path }) => (
  <Link to={path}>
    <h3
      style={{
        ...scale(0.25),
        marginBottom: rhythm(0.1)
      }}
    >
      {title}
    </h3>
    <p>{date}</p>
  </Link>
);

export default Blog;
