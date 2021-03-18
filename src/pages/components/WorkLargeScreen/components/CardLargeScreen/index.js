import React from "react";
import Image from "gatsby-image";

import "./_index.scss";

export default function CardLargeScreen({
  image,
  title,
  description,
  handleShowOverlayClick,
  overlayId,
  infoArrow,
}) {
  return (
    <div className="CardLargeScreen">
      <div className="CardLargeScreen_container">
        <div
          className={`CardLargeScreen_container-left ${
            title === "Hearts in My Oven" ? "order-2" : ""
          }`}
        >
          {image && (
            <Image
              className="CardLargeScreen_image-work-large"
              fluid={image.childImageSharp.fluid}
            ></Image>
          )}
        </div>
        <div className={`CardLargeScreen_container-right `}>
          <div className="CardLargeScreen_header h2">{title}</div>
          <div className="CardLargeScreen_description h2-mont">
            {description}
          </div>
          <div
            className="CardLargeScreen_button-more boxShadow-light"
            onClick={() => {
              handleShowOverlayClick(overlayId);
            }}
          >
            More Info
            {infoArrow && (
              <Image
                className="CardLargeScreen_image-work-large"
                fluid={infoArrow.childImageSharp.fluid}
              ></Image>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
