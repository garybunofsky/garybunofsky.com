import React from "react";
import Helmet from "react-helmet";
import "../components/layout.css";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Experiences from "../components/experiences";
import Contact from "../components/contact";
import Skills from "../components/skills";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <div>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://garybunofsky.com/" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta
          property="og:image"
          content="https://garybunofsky.com/open-graph-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://garybunofsky.com/" />
        <meta property="twitter:title" content={site.siteMetadata.title} />
        <meta
          property="twitter:description"
          content={site.siteMetadata.description}
        />
        <meta
          property="twitter:image"
          content="https://garybunofsky.com/open-graph-image.png"
        />
      </Helmet>
      <SEO title="Gary Bunofsky, Software Developer" />

      <main className="container">
        <Bio
          siteTitle={site.siteMetadata.title}
          siteDescription={site.siteMetadata.description}
        />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default IndexPage;
