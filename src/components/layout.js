/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";
import Bio from "./bio";
import Projects from "./projects";
import { rhythm, scale } from "../utils/typography";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Bio
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 580
        }}
      >
        <main>{children}</main>
        <Projects />

        <h2
          style={{
            ...scale(-0.25),
            textTransform: `uppercase`,
            color: `#A5AF9B`,
            marginBottom: rhythm(0.1)
          }}
        >
          Resume
        </h2>
        <p>
          <a
            href="/resume.pdf"
            className="highlight"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download my resume
          </a>
        </p>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
