import PropTypes from "prop-types";
import React from "react";
import Drawing from "../components/drawing";
import { rhythm, scale } from "../utils/typography";

const Bio = ({ siteTitle, siteDescription }) => (
  <div>
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
      {siteTitle}
    </h1>
    <p
      style={{
        ...scale(0)
      }}
    >
      {siteDescription} I am currently looking freelance projects —{" "}
      <a
        href="https://docs.google.com/document/d/169vwJyUUlLRKcY-VihmY2DCSJLqQmjrw2KB42Jx8G2I/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >
        check out my résumé
      </a>{" "}
      or{" "}
      <a
        href="mailto:gary@garybunofsky.com?subject=Hi%20Gary"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >
        send me an email
      </a>
      .
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
