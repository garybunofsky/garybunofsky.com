import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

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
    <main className="container">
      <Bio
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />

      <Projects />
      <Experiences />
      <Skills />
      <Contact />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
