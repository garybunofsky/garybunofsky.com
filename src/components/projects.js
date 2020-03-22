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
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
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
                ...scale(-0.25),
                fontWeight: 600,
                fontFamily: `monospace`
              }}
            >
              View source
            </span>
          </a>
        ) : null}
      </div>

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
    <div style={{ marginBottom: rhythm(2.5) }}>
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
        "I built an app for Marketplace Strategy tracks Amazon prices, content and other data to increase sales. I also designed an activity feature to optimize product changes. Account reps also recieve a daily email notifying which products are unavailable.",
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
