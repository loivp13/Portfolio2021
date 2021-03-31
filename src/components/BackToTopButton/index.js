import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import "./index.scss";

export default function BackToTopButton() {
  const ImageQuery = useStaticQuery(graphql`
    {
      arrow: file(
        relativePath: {
          eq: "images/Desktop/BUTTON (Overlay) - right arrow (next) (Hover State).png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="BackToTopButton opacity-none">
      <a href="#OverlayItem_Nav">
        <div className="BackToTopButton-container">
          <p>TOP</p>
          <div className="BackToTopButton-arrow">
            <Image fluid={ImageQuery.arrow.childImageSharp.fluid}></Image>
          </div>
        </div>
      </a>
    </div>
  );
}
