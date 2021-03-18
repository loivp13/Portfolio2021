import React, { useState } from "react";
import Image from "gatsby-image";

import "./_index.scss";

export default function HoverImage({ hoverImage, image }) {
  const [state, setState] = useState({
    isHoverState: false,
  });

  const { isHoverState, mouseLeave } = state;

  const handleImageMouseEnter = () => {
    setState({ isHoverState: !isHoverState });
  };

  const handleImageMouseLeave = () => {
    setState({ isHoverState: !isHoverState });
  };

  return (
    <>
      {/* display none on hover */}
      <div
        onMouseEnter={handleImageMouseEnter}
        className={`Contact_images-wrapper ${isHoverState ? "d-none" : ""}`}
      >
        <Image
          className="Contact_images-github"
          fluid={image.childImageSharp.fluid}
        ></Image>
      </div>
      {/* display on hover */}
      <div
        onMouseLeave={handleImageMouseLeave}
        className={`Contact_images-wrapper ${isHoverState ? "" : "d-none"} `}
      >
        <Image
          className="Contact_images-github"
          fluid={hoverImage.childImageSharp.fluid}
        ></Image>
      </div>
    </>
  );
}
