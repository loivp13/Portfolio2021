import React, { useEffect, useState } from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import anime from "animejs/lib/anime.es.js";
import { useMediaQuery } from "react-responsive";

import "./_index.scss";

export default function Navbar({ isMenuOpen, handleOnMenuClick }) {
  const ImageQuery = useStaticQuery(graphql`
    {
      email: file(relativePath: { eq: "images/Tablet/ICON - email.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "images/Tablet/ICON - github.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(
        relativePath: { eq: "images/Tablet/ICON - linkedin.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });

  useEffect(() => {
    if (isMenuOpen) {
      anime({
        opacity: "1",
        targets: ".Navbar-menu",
        translateY: [`${isTablet ? "-60vh" : "-70vh"}`, "0"],
        easing: "linear",
        duration: 500,
      });
    } else {
      anime({
        targets: ".Navbar-menu",
        translateY: ["0", `${isTablet ? "-60vh" : "-70vh"}`],
        easing: "linear",
        duration: 500,
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="Navbar">
      <div onClick={handleOnMenuClick} className="Navbar-menu">
        <div className="Navbar-menu-item h1-mont">
          <a href="#about">about</a>
        </div>
        <div className="Navbar-menu-item h1-mont">
          <a href="#work">work</a>
        </div>
        <div className="Navbar-menu-items">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/loivp13"
            className=""
          >
            <Image
              fluid={ImageQuery.github.childImageSharp.fluid}
              className="Navbar-menu-icon"
              alt=""
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/loivp13/"
            className=""
          >
            {" "}
            <Image
              fluid={ImageQuery.linkedin.childImageSharp.fluid}
              className="Navbar-menu-icon"
              alt=""
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:loivp13@gmail"
            className=""
          >
            <Image
              fluid={ImageQuery.email.childImageSharp.fluid}
              className="Navbar-menu-icon"
              alt=""
              target="_blank"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
