import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";

const Projects = ({ projects }) =>
  projects.map((project, index) => (
    <div
      key={index}
      style={{
        marginBottom: rhythm(0.5)
      }}
    >
      <a href={project.link} target="_blank">
        <h3
          style={{
            ...scale(0.25),
            marginBottom: rhythm(0.1)
          }}
        >
          {project.name}
        </h3>
      </a>
      <p
        style={{
          ...scale(0)
        }}
      >
        {project.description}
      </p>
    </div>
  ));

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string
    })
  )
};

Projects.defaultProps = {
  projects: [
    {
      name: "Intel",
      description:
        "I built an app that tracks Amazon prices, content and other data to increase sales. I designed an activity feature to optimize product changes. Created an email campaign to notify employees when a product is unavailable.",
      link: "https://intel.marketplacestrategy.com"
    },
    {
      name: "Cleveland Weather Bot",
      description:
        "I made a bot that tweets an emoji when Cleveland's weather changes. It's written in Node and Express.",
      link: "https://twitter.com/cle_weather_bot"
    }
  ]
};

export default Projects;
