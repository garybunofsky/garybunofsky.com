import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Software Developer" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article
              key={node.fields.slug}
              style={{
                marginBottom: rhythm(2)
              }}
            >
              <Link
                style={{
                  display: `flex`,
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  alignItems: `center`
                }}
                to={node.fields.slug}
              >
                <span
                  style={{
                    ...scale(1),
                    marginRight: rhythm(3 / 4)
                  }}
                >
                  {node.frontmatter.emoji}
                </span>
                <div>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 100)
                      }}
                    >
                      {title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                </div>
              </Link>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            emoji
          }
        }
      }
    }
  }
`;
