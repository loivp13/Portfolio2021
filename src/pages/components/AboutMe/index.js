import React from "react";
import "./_index.scss";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export default function AboutMe() {
  const ImageQuery = useStaticQuery(graphql`
    {
      aboutme: file(relativePath: { eq: "images/Desktop/ICON - github.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="AboutMe">
      <div className="AboutMe_title h3">About Me</div>
      <div className="AboutMe_header">
        <div className="AboutMe_header-caption h4">Hello There!</div>
        <div className="AboutMe_header-image">
          <Image
            fluid={ImageQuery.aboutme.childImageSharp.fluid}
            className="AboutMe_header-image-me"
          ></Image>
        </div>
      </div>
      <main className="AboutMe_main">
        <p>
          My name is <span className="text-bold"> Loi Pham</span> and I have
          been doing
          <span className="text-bold"> web development since 2017</span> .
        </p>
        <p>
          I specialize in <span className="text-bold">React</span> and its
          ecosystem for the <span className="text-bold">Front End</span> and
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
