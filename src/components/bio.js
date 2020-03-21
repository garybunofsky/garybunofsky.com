import PropTypes from "prop-types";
import React from "react";
import Drawing from "../components/drawing";
import { rhythm, scale } from "../utils/typography";

const Bio = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      paddingBottom: rhythm(1),
      paddingTop: rhythm(1)
    }}
  >
    <div
      style={{
        maxWidth: `320px`,
        marginLeft: `auto`,
        marginRight: `auto`,
        marginBottom: rhythm(0.75)
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
      {siteTitle}
    </h1>
    <p
      style={{
        ...scale(0)
      }}
    >
      {siteDescription} I am currently looking for a full-time role —{" "}
      <a
        href="mailto:gary@garybunofsky.com?subject=Hi%20Gary"
        className="highlight"
      >
        check out my résumé.
      </a>
    </p>
  </div>
);

Bio.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
};

Bio.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
};

export default Bio;
