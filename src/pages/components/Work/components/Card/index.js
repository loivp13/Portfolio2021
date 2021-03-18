import React from "react";
import Image from "gatsby-image";

import "./_index.scss";

export default function Card({
  image,
  title,
  description,
  handleShowOverlayClick,
  overlayId,
}) {
  return (
    <div className="Card">
      <Image
        className="Card_image-work"
        fluid={image.childImageSharp.fluid}
      ></Image>
      <div className="Card_header h2">{title}</div>
      <div className="Card_description h2-mont">{description}</div>
      <div
        className="Card_button-more boxShadow-light"
        onClick={() => {
          handleShowOverlayClick(overlayId);
        }}
      >
        See More
      </div>
    </div>
  );
}
