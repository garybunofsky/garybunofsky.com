import PropTypes from "prop-types";
import React from "react";
import "../components/layout.css";
import { useStaticQuery, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import Blog from "../components/blog";
import Drawing from "../components/drawing";

const BlogPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
  `);

  return (
    <main className="container">
      <div
        style={{
          maxWidth: `320px`,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginBottom: rhythm(0.75),
          opacity: `0.75`
        }}
      >
        <Drawing />
      </div>

      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(0.5)
        }}
      >
        Blog
      </h1>
      <p>
        This isn't really a blog; it's more of hodgepodge of half baked ideas,
        notes, scripts and other things I don't want to forget. Anything you see
        here is subject to change.
      </p>

      {data.allMarkdownRemark.edges.map(post => {
        const { title, path, date } = post.node.frontmatter;
        return (
          <Blog
            title={title}
            date={date}
            key={`${date}__${title}`}
            path={path}
          />
        );
      })}
    </main>
  );
};

BlogPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogPage;
