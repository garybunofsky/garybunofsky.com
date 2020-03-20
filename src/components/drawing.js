import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      drawing: file(relativePath: { eq: "gary-drawing.png" }) {
        childImageSharp {
          fluid(maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.drawing.childImageSharp.fluid} />;
};

export default Image;
