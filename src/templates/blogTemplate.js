import React from "react";
import { graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="container">
      <h1>{frontmatter.title}</h1>
      <h2
        style={{
          ...scale(-0.25),
          textTransform: `uppercase`,
          color: `#A5AF9B`,
          marginBottom: rhythm(0.1)
        }}
      >
        {frontmatter.date}
      </h2>
      <div
        className="wiki-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;