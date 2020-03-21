import React from "react";
import PropTypes from "prop-types";
import { rhythm, scale } from "../utils/typography";

const Socials = ({ socials }) => {
  let heading = (
    <h2
      style={{
        ...scale(-0.25),
        textTransform: `uppercase`,
        color: `#A5AF9B`,
        marginBottom: rhythm(0.1)
      }}
    >
      Socials
    </h2>
  );

  let items = socials.map((social, index) => (
    <a href={social.url} target="_blank" rel="noopener noreferrer">
      <li
        style={{
          marginBottom: rhythm(0.5)
        }}
      >
        {social.name}
      </li>
    </a>
  ));

  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      {heading}
      <ul>{items}</ul>
    </div>
  );
};
Socials.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};

Socials.defaultProps = {
  socials: [
    {
      name: "GitHub",
      url: "https://www.github.com/garybunofsky/"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/garybunofsky/"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/garybunofsky/"
    },

    {
      name: "Twitter",
      url: "https://www.twitter.com/garybunofsky/"
    }
  ]
};

export default Socials;
