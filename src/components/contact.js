import React from "react";
import PropTypes from "prop-types";
import { rhythm, scale } from "../utils/typography";

const Contact = ({ mediums }) => {
  let heading = (
    <h2
      style={{
        ...scale(-0.25),
        textTransform: `uppercase`,
        color: `#aaa`,
        marginBottom: rhythm(0.1)
      }}
    >
      Contact
    </h2>
  );

  let items = mediums.map((medium, index) => (
    <a href={medium.url} target="_blank" rel="noopener noreferrer">
      <li
        style={{
          marginBottom: rhythm(0.5)
        }}
      >
        {medium.name}
      </li>
    </a>
  ));

  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      {heading}
      <ul
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`
        }}
      >
        {items}
      </ul>
    </div>
  );
};

Contact.propTypes = {
  mediums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

Contact.defaultProps = {
  mediums: [
    {
      name: "Email",
      url: "mailto:gary@garybunofsky.com?subject=Hi%20Gary"
    },
    {
      name: "(330) 506-1300",
      url: "tel:3305061300"
    },
    {
      name: "GitHub",
      url: "https://www.github.com/garybunofsky/"
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/garybunofsky/"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/garybunofsky/"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/garybunofsky/"
    }
  ]
};

export default Contact;
