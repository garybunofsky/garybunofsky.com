import React from "react";
import PropTypes from "prop-types";
import { rhythm, scale } from "../utils/typography";

const Projects = ({ projects }) => {
  let heading = (
    <h2
      style={{
        ...scale(-0.25),
        textTransform: `uppercase`,
        color: `#A5AF9B`,
        marginBottom: rhythm(0.1)
      }}
    >
      Projects
    </h2>
  );

  let items = projects.map((project, index) => (
    <div
      key={index}
      style={{
        marginBottom: rhythm(0.5)
      }}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3
          style={{
            ...scale(0.25),
            marginBottom: rhythm(0.1)
          }}
        >
          {project.name}
        </h3>
      </a>

      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: `none`
          }}
        >
          <span
            style={{
              ...scale(-0.5),
              textTransform: `uppercase`,
              fontFamily: `monospace`,
              color: `#A5AF9B`,
              marginBottom: rhythm(0.1)
            }}
          >
            Source
          </span>
        </a>
      ) : null}

      <p
        style={{
          ...scale(0)
        }}
      >
        {project.description}
      </p>
    </div>
  ));

  return (
    <div>
      {heading}
      {items}
    </div>
  );
};
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      githubUrl: PropTypes.string
    })
  )
};

Projects.defaultProps = {
  projects: [
    {
      name: "Intel",
      description:
        "I built an app that tracks Amazon prices, content and other data to increase sales. I designed an activity feature to optimize product changes. Created an email campaign to notify employees when a product is unavailable.",
      url: "https://intel.marketplacestrategy.com",
      githubUrl: null
    },
    {
      name: "Cleveland Weather Bot",
      description:
        "I made a bot that tweets an emoji when Cleveland's weather changes. It's written in Node and Express.",
      url: "https://twitter.com/cle_weather_bot",
      githubUrl: "https://github.com/garybunofsky/clevelandweather"
    }
  ]
};

export default Projects;
