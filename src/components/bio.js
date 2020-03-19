import PropTypes from "prop-types";
import React from "react";

import { rhythm, scale } from "../utils/typography";

const Bio = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 580,
      paddingBottom: rhythm(1),
      paddingTop: rhythm(1)
    }}
  >
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
      {siteDescription} <br />
      <a
        href="mailto:gary@garybunofsky.com?subject=Hi%20Gary"
        className="highlight"
      >
        I am currently looking for a full-time role!
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
