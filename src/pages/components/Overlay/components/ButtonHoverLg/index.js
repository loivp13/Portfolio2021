import React, { useState } from "react";
import Image from "gatsby-image";

import "./_index.scss";

export default function ButtonHoverLg({ image, isHover, imageHover }) {
  return (
    <div className="ButtonHoverLg">
      {}
      <Image
        className={!isHover ? "opacity-none " : " zIndex-1 "}
        fluid={imageHover.childImageSharp.fluid}
        imgStyle={{
          objectFit: "initial",
        }}
      ></Image>
      <Image
        className={isHover ? "opacity-none" : " zIndex-1"}
        fluid={image.childImageSharp.fluid}
        imgStyle={{
          objectFit: "initial",
        }}
      ></Image>
    </div>
  );
}
