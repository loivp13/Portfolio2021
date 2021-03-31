import React, { useState, useEffect, useRef } from "react";
import OverlayItem from "./components/OverlayItem";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";
import anime from "animejs/lib/anime.es.js";

import "./_index.scss";

export default function Overlay({
  currentOverlay,
  handleChangeOverlayClick,
  handleShowOverlayClick,
}) {
  const ImageQuery = useStaticQuery(graphql`
    {
      CleverDesktop: file(
        relativePath: {
          eq: "images/hero images without shadow/web - clever acc overlay desktop.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1534) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CleverMobile: file(
        relativePath: {
          eq: "images/Desktop/Clever Overlay/Clever - mobile entire page screenshot (for animation).jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CleverPage: file(
        relativePath: {
          eq: "images/Desktop/Clever Overlay/pricing screenshot mask group.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HMODesktop: file(
        relativePath: { eq: "images/hero images without shadow/hmoblog2_1.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1534) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HMOMobile: file(
        relativePath: { eq: "images/Desktop/HMO Overlay/Mask Group 2.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HMOPage: file(
        relativePath: { eq: "images/Desktop/HMO Overlay/heartsinmyoven2.0.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NetflixDesktop: file(
        relativePath: { eq: "images/hero images without shadow/netflix.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1534) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NetflixMobile: file(
        relativePath: { eq: "images/Desktop/Netflix/mobile screenshot.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NetflixPage: file(
        relativePath: {
          eq: "images/Desktop/Netflix/netflix home page screenshot.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 1581) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [state, setState] = useState({
    top: 0,
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)",
  });
  const { top } = state;

  const handleWindowScroll = (e) => {
    if (typeof window !== "undefined") {
      //get how many px user has scrolled
      var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      let x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft;
      let y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
      setState({
        ...state,
        top: h,
      });
    }
  };

  //run overlay animation on mount
  const overlayAnimationOpen = anime({
    targets: ".Overlay",
    translateY: `-100vh`,
    easing: "linear",
    duration: 450,
    autoplay: true,
  });

  //run closing animation on click
  const handleClosingClick = () => {
    anime({
      targets: ".Overlay",
      translateY: `100vh`,
      easing: "linear",
      duration: 450,
      autoplay: true,
      complete: function () {
        handleShowOverlayClick();
      },
    });
  };

  let animationRefRtL = useRef();
  let animationRefLtR = useRef();
  let animationRefLtR2 = useRef();

  //Handle Mounting and unmoutning animation
  let overlayElement = useRef(null);
  let overlayItemNavElement = useRef(null);
  let backToTop = useRef(null);
  let overlay = useRef();

  //move overlayNav
  const checkIfOverlayHasScrolled = () => {
    //if scrollTop greater than 200px show backToTop button
    if (overlayElement.current.scrollTop > 200) {
      backToTop.current.style.opacity = "1";
    } else {
      backToTop.current.style.opacity = "0";
    }
    //moveNav on user scroll
    if (isDesktop && overlayElement.current.scrollTop > 0) {
      overlayItemNavElement.current.style.transform = `translateY(${overlayElement.current.scrollTop}px)`;
    } else {
      overlayItemNavElement.current.style.transform = `translateY(0px)`;
    }
  };

  useEffect(() => {
    //hide body overflow when overlay is showing
    backToTop.current = document.querySelector(".BackToTopButton");
    overlayElement.current = document.querySelector(".Overlay");

    document.querySelector("html").style.overflow = "hidden";

    overlayItemNavElement.current = document.querySelector(
      ".OverlayItem-main .OverlayItem_Navbar"
    );
    overlayElement.current.addEventListener(
      "scroll",
      checkIfOverlayHasScrolled
    );

    handleWindowScroll();
    overlay.current = document.querySelector(".Overlay");
    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("resize", handleWindowScroll);
    animationRefLtR.current = anime({
      targets: ".OverlayItem_animation-ltr",
      translateX: `100vw`,
      duration: 450,
      easing: "linear",
      autoplay: false,
      begin: function () {
        let leftOverlay = document.querySelector(".OverlayItem_animation-ltr");
        if (leftOverlay) {
          leftOverlay.style.display = "block";
        }
      },
      complete: function () {
        overlay.current.scrollTop = 0;
      },
    });
    animationRefLtR2.current = anime({
      targets: ".OverlayItem_animation-ltr-2",
      translateX: `100vw`,
      duration: 450,
      autoplay: false,
      easing: "linear",
      begin: function () {
        let leftOverlay2 = document.querySelector(
          ".OverlayItem_animation-ltr2"
        );
        if (leftOverlay2) {
          leftOverlay2.style.display = "block";
        }
      },
      complete: function () {
        overlay.current.scrollTop = 0;
      },
    });
    animationRefRtL.current = anime({
      targets: ".OverlayItem_animation-rtl",
      translateX: `-100vw`,
      duration: 450,
      easing: "linear",
      autoplay: false,
      begin: function () {
        let rightOverlay = document.querySelector(".OverlayItem_animation-rtl");
        if (rightOverlay) {
          rightOverlay.style.display = "block";
        }
      },
      complete: function () {
        overlay.current.scrollTop = 0;

        let rightOverlay = document.querySelector(".OverlayItem_animation-rtl");
        if (rightOverlay) {
          rightOverlay.style.display = "";
        }
      },
    });
    return () => {
      //make body overflow normal once overlay closes
      document.querySelector("html").style.overflow = "auto";

      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowScroll);
      overlayItemNavElement.current.removeEventListener(
        "scroll",
        checkIfOverlayHasScrolled
      );
    };
  }, [currentOverlay, isDesktop]);

  const renderOverlay = () => {
    switch (currentOverlay) {
      case 0:
        return (
          <>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem-main "}
              handleClosingClick={handleClosingClick}
              handleShowOverlayClick={handleShowOverlayClick}
              handleChangeOverlayClick={handleChangeOverlayClick}
              title={"Clever Accountants"}
              description={"Gulp, HMTL5, SASS, Javascript"}
              excerpt={
                "I was contracted to work with a UX design team to solely develop a website for a local, small business, The Clever Accountants."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.CleverDesktop}
              image2={ImageQuery.CleverMobile}
              image3={ImageQuery.CleverPage}
              overlayId={0}
              link="https://thecleveraccountants.com/"
            ></OverlayItem>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={`OverlayItem_animation-rtl d-none`}
              handleChangeOverlayClick={handleChangeOverlayClick}
              handleShowOverlayClick={handleShowOverlayClick}
              handleClosingClick={handleClosingClick}
              title={"Hearts In my Oven"}
              description={
                "WordPress Theme Development, PHP, WAMP, HMTL5, CSS, JavaScript, Print Feature, & Recipe Filter"
              }
              excerpt={
                "I was contracted to work with a food blogger to migrate her entire site from Blogger to WordPress."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.HMODesktop}
              image2={ImageQuery.HMOMobile}
              image3={ImageQuery.HMOPage}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
          </>
        );
      case 1:
        return (
          <>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-ltr d-none "}
              handleClosingClick={handleClosingClick}
              handleShowOverlayClick={handleShowOverlayClick}
              handleChangeOverlayClick={handleChangeOverlayClick}
              title={"Clever Accountants"}
              description={"Gulp, HMTL5, SASS, Javascript"}
              excerpt={
                "I was contracted to work with a UX design team to solely develop a website for a local, small business, The Clever Accountants."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.CleverDesktop}
              image2={ImageQuery.CleverMobile}
              image3={ImageQuery.CleverPage}
              overlayId={0}
              link="https://thecleveraccountants.com/"
            ></OverlayItem>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem-main"}
              handleChangeOverlayClick={handleChangeOverlayClick}
              handleShowOverlayClick={handleShowOverlayClick}
              handleClosingClick={handleClosingClick}
              title={"Hearts In my Oven"}
              description={
                "WordPress Theme Development, PHP, WAMP, HMTL5, CSS, JavaScript, Print Feature, & Recipe Filter"
              }
              excerpt={
                "I was contracted to work with a food blogger to migrate her entire site from Blogger to WordPress."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.HMODesktop}
              image2={ImageQuery.HMOMobile}
              image3={ImageQuery.HMOPage}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-rtl d-none"}
              handleChangeOverlayClick={handleChangeOverlayClick}
              handleClosingClick={handleClosingClick}
              handleShowOverlayClick={handleShowOverlayClick}
              title={"Netflix Replica"}
              description={
                "ReactJS, HTML, CSS, NodeJS, Express, Webpack, SASS, Heroku, API"
              }
              excerpt={
                "A project to build a replica of one of the most popular streaming sites of today."
              }
              bulletPoints={
                "User's beginning journey • youtube api • carousel • account creation • Mobile Web • Deployment"
              }
              image1={ImageQuery.NetflixDesktop}
              image2={ImageQuery.NetflixMobile}
              image3={ImageQuery.NetflixPage}
              overlayId={2}
              link={"https://netflix-react.herokuapp.com/"}
            ></OverlayItem>
          </>
        );
      case 2:
        return (
          <>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-ltr-2"}
              handleChangeOverlayClick={handleChangeOverlayClick}
              handleShowOverlayClick={handleShowOverlayClick}
              handleClosingClick={handleClosingClick}
              title={"Hearts In my Oven"}
              description={
                "WordPress Theme Development, PHP, WAMP, HMTL5, CSS, JavaScript, Print Feature, & Recipe Filter"
              }
              excerpt={
                "I was contracted to work with a food blogger to migrate her entire site from Blogger to WordPress."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.HMODesktop}
              image2={ImageQuery.HMOMobile}
              image3={ImageQuery.HMOPage}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
            <OverlayItem
              currentOverlay={currentOverlay}
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className="OverlayItem-main"
              handleChangeOverlayClick={handleChangeOverlayClick}
              handleClosingClick={handleClosingClick}
              handleShowOverlayClick={handleShowOverlayClick}
              title={"Netflix Replica"}
              description={
                "ReactJS, HTML, CSS, NodeJS, Express, Webpack, SASS, Heroku, API"
              }
              excerpt={
                "A project to build a replica of one of the most popular streaming sites of today."
              }
              bulletPoints={
                "User's beginning journey • youtube api • carousel • account creation • Mobile Web • Deployment"
              }
              image1={ImageQuery.NetflixDesktop}
              image2={ImageQuery.NetflixMobile}
              image3={ImageQuery.NetflixPage}
              overlayId={2}
              link={"https://netflix-react.herokuapp.com/"}
            ></OverlayItem>
          </>
        );
    }
  };
  return <div className="Overlay">{renderOverlay()}</div>;
}
