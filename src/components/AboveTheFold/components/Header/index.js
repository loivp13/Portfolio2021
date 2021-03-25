import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";

import "./sass/index.scss";

export default function Header({ isMenuOpen, handleOnMenuClick }) {
  const ImageQuery = useStaticQuery(graphql`
    {
      open: file(
        relativePath: {
          eq: "images/Tablet/BUTTON (TopNav) - Menu hamburger.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      close: file(
        relativePath: { eq: "images/Tablet/Button (Top Nav) - X (close).jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const renderButtonIcon = () => {
    return (
      <>
        <Image
          fluid={ImageQuery.close.childImageSharp.fluid}
          className={`Navbar-button-menu ${isMenuOpen ? "" : "d-none"}`}
          alt=""
          imgStyle={{
            objectFit: "none",
          }}
        />
        <Image
          fluid={ImageQuery.open.childImageSharp.fluid}
          className={`Navbar-button-menu ${isMenuOpen ? "d-none" : ""}`}
          alt=""
          imgStyle={{
            objectFit: "none",
          }}
        />
      </>
    );
  };
  const renderNavItems = () => {
    return (
      <div className="Navbar-items">
        <div className="Navbar-items-about">
          <a href="#about">
            <span className="opacity-none  primary-text">/</span>about
          </a>
        </div>
        <div className="Navbar-items-work">
          <a href="#work">
            <span className="opacity-none primary-text">/</span>work
          </a>
        </div>
        <div className="Navbar-items-contact">
          <a href="#contact">
            <span className="opacity-none primary-text">/</span>contact
          </a>
        </div>
      </div>
    );
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 992px)" });

  return (
    <div className="Header">
      <Logo></Logo>
      {isBigScreen ? (
        renderNavItems()
      ) : (
        <div
          className="Navbar-button"
          onClick={handleOnMenuClick}
          onKeyDown={handleOnMenuClick}
          role="button"
          tabIndex={0}
        >
          {renderButtonIcon()}
        </div>
      )}
    </div>
  );
}
