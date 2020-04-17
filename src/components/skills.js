import React from "react";
import PropTypes from "prop-types";
import { rhythm, scale } from "../utils/typography";

const Skills = ({ skills }) => {
  let heading = (
    <h2
      style={{
        ...scale(-0.25),
        textTransform: `uppercase`,
        color: `#aaa`,
        marginBottom: rhythm(0.1)
      }}
    >
      Skills
    </h2>
  );

  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      {heading}
      <p>{skills.join(", ")}</p>
    </div>
  );
};
Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};

Skills.defaultProps = {
  skills: [
    "JavaScript",
    "React",
    "Node",
    "Vue",
    "Ruby",
    "Rails",
    "Rspec",
    "Jest",
    "Git",
    "AWS",
    "PSQL",
    "SCSS",
    "PHP",
    "Vim",
    "SSH",
    "Flexbox",
    "CSS Grid",
    "Sketch App"
  ]
};

export default Skills;
