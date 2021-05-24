import React, { useEffect } from "react";
import Image from "gatsby-image";

import "./_index.scss";
export default function Card({
  image,
  title,
  description,
  handleShowOverlayClick,
  overlayId,
}) {
  useEffect(() => {
    if (window) {
      let WOW = require("wowjs");
      let wow = new WOW.WOW({
        boxClass: `wow-${overlayId}`,
        animateClass: "aniamted",
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
      className={`Card wow-${overlayId} animate__fadeInLeft `}
    >
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
