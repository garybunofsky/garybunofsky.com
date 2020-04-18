import React from "react";
import { graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import "../components/layout.css";
import moment from "moment";
export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="container">
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(0.5)
        }}
      >
        {frontmatter.title}
      </h1>
      <span
        style={{
          ...scale(-0.25),
          color: `#aaa`,
          marginBottom: rhythm(0.1),
          fontWeight: 500
        }}
      >
        {moment(frontmatter.date).format("MMMM Do, YYYY")}
      </span>
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
