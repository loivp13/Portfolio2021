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
        onMouseLeave={handleImageMouseLeave}
        onMouseEnter={handleImageMouseEnter}
        className={`Contact_images-wrapper`}
      >
        <Image
          className={`"Contact_images-github ${
            isHoverState ? "opacity-none" : "zIndex-19"
          }"`}
          fluid={image.childImageSharp.fluid}
        ></Image>
        <Image
          className={`"Contact_images-github" ${
            isHoverState ? "zIndex-1" : "opacity-none"
          }`}
          fluid={hoverImage.childImageSharp.fluid}
        ></Image>
      </div>
    </>
  );
}
