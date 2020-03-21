import React from "react";
import PropTypes from "prop-types";
import { rhythm, scale } from "../utils/typography";

const Experience = ({ experiences }) => {
  let heading = (
    <h2
      style={{
        ...scale(-0.25),
        textTransform: `uppercase`,
        color: `#A5AF9B`,
        marginBottom: rhythm(0.1)
      }}
    >
      Experience
    </h2>
  );

  let items = experiences.map((experience, index) => (
    <div
      key={index}
      style={{
        marginBottom: rhythm(0.5)
      }}
    >
      <a href={experience.url} target="_blank" rel="noopener noreferrer">
        <h3
          style={{
            ...scale(0.25),
            marginBottom: rhythm(0.1)
          }}
        >
          {experience.company}
        </h3>
      </a>
      <span
        style={{
          ...scale(-0.25),
          color: `#A5AF9B`,
          marginBottom: rhythm(0.1),
          fontWeight: 500
        }}
      >
        {experience.title}, {experience.startDate} - {experience.endDate}
      </span>

      <p
        style={{
          ...scale(0)
        }}
      >
        {experience.description}
      </p>
    </div>
  ));

  return (
    <div style={{ marginBottom: rhythm(2) }}>
      {heading}
      {items}
    </div>
  );
};
Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      githubUrl: PropTypes.string
    })
  )
};

Experience.defaultProps = {
  experiences: [
    {
      company: "Marketplace Strategy",
      title: "Freelance Developer",
      description:
        "I built an app that tracks Amazon prices, content and other data to increase sales. I designed an activity feature to optimize product changes. I created an automated email campaign to notify employees if a product is unavailable.",
      startDate: "July 2017",
      endDate: "Present",
      location: "Cleveland & remote",
      url: "https://universitytees.com"
    },
    {
      company: "University Tees",
      title: "Software Developer",
      description:
        "I lead feature lifecycles: from idea, to iteration, to deployment. I developed a job time calculator that increased production output. Similarly, I increased output by integrating the customer-facing and production apps. I also built a calendar to view planned work and aid with job scheduling. ",
      startDate: "October 2018",
      endDate: "March 2020",
      location: "Cleveland & remote",
      url: "https://universitytees.com"
    },
    {
      company: "Thinkful",
      title: "Design Mentor",
      description:
        "I was a one-on-one mentor for students in the JavaScript and UX courses. I helped students learn through examples, assignments and encouragement.",
      startDate: "November 2016",
      endDate: "April 2019",
      location: "NYC & remote",
      url: "https://www.thinkful.com"
    },
    {
      company: "Web Machine",
      title: "Developer & Co-founder",
      description:
        "Designed, developed, and launched custom WordPress websites.",
      startDate: "September 2012",
      endDate: "November 2017",
      location: "Cleveland & remote",
      url: null
    },
    {
      company: "EmployStream",
      title: "Software Developer",
      description:
        "I developed an automated email campaign to send similar jobs to applicants. I met with and on-boarded new customers. Worked support and fixed bugs.",
      startDate: "September 2015",
      endDate: "July 2017",
      location: "Cleveland & remote",
      url: "https://www.employstream.com"
    },
    {
      company: "Fathom Marketing",
      title: "Web Developer",
      description:
        "Worked closely with companies like CVS Pharmacy and Indiana University to develop high-traffic PPC websites.",
      startDate: "September 2014",
      endDate: "September 2015",
      location: "Cleveland & remote",
      url: "https://www.fathomdelivers.com"
    }
  ]
};

export default Experience;
