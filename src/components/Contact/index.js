import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import HoverImage from "./components/HoverImage";

import "./_index.scss";

export default function Contact() {
  const ImageQuery = useStaticQuery(graphql`
    {
      github: file(relativePath: { eq: "images/Desktop/ICON - github.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubHover: file(
        relativePath: { eq: "images/Desktop/ICON - github (Hover State).png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linked: file(relativePath: { eq: "images/Desktop/ICON - linkedin.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedHover: file(
        relativePath: { eq: "images/Desktop/ICON - linkedin (Hover State).png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "images/Desktop/ICON - email.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emailHover: file(
        relativePath: { eq: "images/Desktop/ICON - email (Hover State).png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  useEffect(() => {
    if (window) {
      let WOW = require("wowjs");

      let wow = new WOW.WOW({
        boxClass: `wow-contact`,
        animateClass: "aniamted",
        offset: 100, // distance to the element when triggering the animation (default is 0)
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
      id="contact"
      className="Contact wow-contact animate__fadeInLeft"
    >
      <div className="Contact_title h3">contact</div>
      <div className="Contact_images">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/loivp13"
          className=""
        >
          <HoverImage
            hoverImage={ImageQuery.githubHover}
            image={ImageQuery.github}
          ></HoverImage>
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/loivp13/"
          className=""
        >
          <HoverImage
            hoverImage={ImageQuery.linkedHover}
            image={ImageQuery.linked}
          ></HoverImage>
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:loivp13@gmail"
          className=""
        >
          <HoverImage
            hoverImage={ImageQuery.emailHover}
            image={ImageQuery.email}
          ></HoverImage>
        </a>
      </div>
    </div>
  );
}
