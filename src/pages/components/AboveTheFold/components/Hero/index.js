import React, { useEffect, useRef } from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import anime from "animejs/lib/anime.es.js";
import Typewriter from "typewriter-effect";

import "./_index.scss";

export default function Hero() {
  const ImageQuery = useStaticQuery(graphql`
    {
      arrow: file(
        relativePath: {
          eq: "images/Desktop/BUTTON (Homepage) -ARROWS facing down.png"
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

  useEffect(() => {
    anime({
      targets: ".Hero_arrow",
      translateY: 15,
      loop: true,
      duration: 2200,
      easing: "linear",
      direction: "alternate",
    });
  }, []);

  return (
    <div className="Hero">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(75)
            .typeString(
              `<div class="Hero_name heroFont">LOI VAN PHAM</div><br/>`
            )
            .callFunction(() => {
              document.querySelector(".Hero_typewriter-cursor").style.fontSize =
                "4.5vw";
            })
            .pauseFor(200)
            .typeString(
              '<div class="Hero_title heroFont_sub">front-end web developer.</div>'
            )
            .callFunction(() => {
              anime({
                targets: ".Hero_typewriter-cursor",
                opacity: 0,
                loop: 5,
                duration: 350,
                easing: "linear",
                direction: "alternate",
              });
            })
            .start();
        }}
        options={{
          cursorClassName: "Hero_typewriter-cursor",
          wrapperClassName: "Hero_typewriter-container",
          devMode: true,
        }}
      ></Typewriter>

      <div className="Hero_arrow">
        <Image fluid={ImageQuery.arrow.childImageSharp.fluid}></Image>
      </div>
    </div>
  );
}
