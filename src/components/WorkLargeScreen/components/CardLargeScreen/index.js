import React, { useEffect } from "react";
import Image from "gatsby-image";

import "./_index.scss";

export default function CardLargeScreen({
  image,
  title,
  description,
  handleShowOverlayClick,
  overlayId,
  infoArrow,
  forkedLines,
}) {
  useEffect(() => {
    if (window) {
      let WOW = require("wowjs");

      let wow = new WOW.WOW({
        boxClass: `wow-${overlayId}`, // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 200, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: false, // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window
      });

      wow.init();
    }
  }, []);
  return (
    <div
      data-wow-duration="2s"
      className={`CardLargeScreen wow-${overlayId} animate__fadeInUp `}
    >
      {forkedLines && forkedLines}
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
