import React, { useEffect } from "react";
import "./_index.scss";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export default function AboutMe() {
  const ImageQuery = useStaticQuery(graphql`
    {
      aboutme: file(relativePath: { eq: "images/headshot.png" }) {
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
        boxClass: `wow-about`, // animated element css class (default is wow)
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
    <div id="about" className="AboutMe">
      <div
        data-wow-duration="2s"
        className="AboutMe_title h3 wow-about animate__fadeInUp"
      >
        About Me
      </div>
      <div data-wow-duration="2s" className="AboutMe_header ">
        <div className="AboutMe_header-caption h4 wow-about animate__fadeInRight">
          Hello There!
        </div>
        <div className="AboutMe_header-image wow-about animate__fadeInRight">
          <Image
            fluid={ImageQuery.aboutme.childImageSharp.fluid}
            className="AboutMe_header-image-me "
          ></Image>
        </div>
      </div>
      <main
        data-wow-duration="2s"
        className="AboutMe_main wow-about animate__fadeInLeft"
      >
        <p>
          My name is <span className="text-bold"> Loi Pham</span> and I have
          been doing
          <span className="text-bold"> web development since 2017</span>.
        </p>
        <p>
          I specialize in <span className="text-bold">React</span> and its
          ecosystem for the <span className="text-bold">Front End</span> and{" "}
          <span className="text-bold">NodeJS</span> for the
          <span className="text-bold"> Back End</span>.
        </p>
        <p>
          I'm constantly adding more tools under my belt as I continue my
          journey developing websites and web apps.
        </p>
      </main>
    </div>
  );
}
