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
import Experiences from "./experiences";
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
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 580
        }}
      >
        <Bio
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />

        {children}

        <Projects />
        <Experiences />

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
        <p
          style={{
            ...scale(0)
          }}
        >
          Take a look at{" "}
          <a
            href="/resume.pdf"
            className="highlight"
            rel="noopener noreferrer"
            target="_blank"
          >
            my resume
          </a>
        </p>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
