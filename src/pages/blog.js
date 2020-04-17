import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import Blog from "../components/blog";

const BlogPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
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
      ></div>
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
