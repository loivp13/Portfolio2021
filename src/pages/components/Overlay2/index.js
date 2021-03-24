import React, { useState, useEffect, useRef } from "react";
import OverlayItem from "./components/OverlayItem";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";
import anime from "animejs/lib/anime.es.js";

export default function Overlay2({
  currentOverlay2,
  handleChangeOverlayClick2,
  handleShowOverlayClick2,
}) {
  const ImageQuery = useStaticQuery(graphql`
    {
      FoodieDiaryDesktop: file(
        relativePath: {
          eq: "images/hero images without shadow/myfoodiediaryhome2.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FoodieDiaryMobile: file(
        relativePath: { eq: "images/Desktop/Other Works/MFD Logo 1.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FoodieDiaryPage: file(
        relativePath: {
          eq: "images/Desktop/Other Works/myfoodiediary screenshot.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FoodieDiaryPage2: file(
        relativePath: {
          eq: "images/Desktop/Other Works/myfoodiediaryhome5.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GameDealsDesktop: file(
        relativePath: { eq: "images/Desktop/Other Works/gamedeals01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GameAppDesktop: file(
        relativePath: { eq: "images/Desktop/Other Works/gameapps01.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
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
    query: "(min-device-width: 1200px)",
  });

  const { top } = state;
  const handleWindowScroll = (e) => {
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
      top: y + h,
    });
  };

  const overlayAnimationOpen = anime({
    targets: ".Overlay",
    translateY: `-100vh`,
    easing: "linear",
    duration: 450,
    autoplay: true,
  });

  const handleClosingClick2 = () => {
    anime({
      targets: ".Overlay",
      translateY: `100vh`,
      easing: "linear",
      duration: 450,
      autoplay: true,
      complete: function () {
        handleShowOverlayClick2();
      },
    });
  };
  let animationRefRtL = useRef();
  let animationRefLtR = useRef();
  let animationRefLtR2 = useRef();
  let overlay = useRef();

  //Handle Mounting and unmoutning animation
  //Handle Mounting and unmoutning animation
  let overlayElement = useRef(null);
  let overlayItemNavElement = useRef(null);

  const checkIfOverlayHasScrolled = () => {
    if (isDesktop && overlayElement.current.scrollTop > 0) {
      overlayItemNavElement.current.style.top = `${overlayElement.current.scrollTop}px`;
    } else {
      overlayItemNavElement.current.style.top = 0;
    }
  };

  useEffect(() => {
    overlayElement.current = document.querySelector(".Overlay");

    overlayItemNavElement.current = document.querySelector(
      ".OverlayItem-main .OverlayItem_Navbar"
    );
    overlayElement.current.addEventListener(
      "scroll",
      checkIfOverlayHasScrolled
    );
    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll);
    overlay.current = document.querySelector(".Overlay");
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
      easing: "linear",
      autoplay: false,
      begin: function () {
        let leftOverlay2 = document.querySelector(
          ".OverlayItem_animation-ltr-2"
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
        overlay.current.scrollTop = 0;
      },
      complete: function () {},
    });
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [currentOverlay2]);

  const renderOverlay = () => {
    switch (currentOverlay2) {
      case 0:
        return (
          <>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem-main"}
              handleClosingClick={handleClosingClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              title={"My Foodie Diary"}
              description={
                "ReactJS, AWS S3, NodeJS, Express, Webpack, SASS, Digital Ocean, REST API, HTML, & CSS"
              }
              excerpt={
                "This web application was built for users to record and review their eateries privately and may share to others."
              }
              bulletPoints={
                " AWS S3 • User's beginning journey • Image uploading • account creation • Mongodb • share feature • Deployment"
              }
              image1={ImageQuery.FoodieDiaryDesktop}
              image2={ImageQuery.FoodieDiaryMobile}
              image3={ImageQuery.FoodieDiaryPage}
              image4={ImageQuery.FoodieDiaryPage2}
              overlayId={0}
              link="https://thecleveraccountants.com/"
            ></OverlayItem>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-rtl  d-none h-100"}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              handleClosingClick={handleClosingClick2}
              title={"Game Deals"}
              description={
                "NodeJS, Express, MongoDB, Bootstrap, Webpack, React, Heroku, HTML & CSS"
              }
              excerpt={
                "A personal project for users to buy, sell, and trade games anywhere in the world."
              }
              bulletPoints={
                "Account creation • Mongodb • Listing feature • wishlist feature • Search Feature • Deployment"
              }
              image1={ImageQuery.GameDealsDesktop}
              image2={null}
              image3={null}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
          </>
        );
      case 1:
        return (
          <>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-ltr d-none"}
              handleClosingClick={handleClosingClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              title={"My Foodie Diary"}
              description={
                "ReactJS, AWS S3, NodeJS, Express, Webpack, SASS, Digital Ocean, REST API, HTML, & CSS"
              }
              excerpt={
                "This web application was built for users to record and review their eateries privately and may share to others."
              }
              bulletPoints={
                " AWS S3 • User's beginning journey • Image uploading • account creation • Mongodb • share feature • Deployment"
              }
              image1={ImageQuery.FoodieDiaryDesktop}
              image2={ImageQuery.FoodieDiaryMobile}
              image3={ImageQuery.FoodieDiaryPage}
              overlayId={0}
              link="https://thecleveraccountants.com/"
            ></OverlayItem>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem-main h-100 "}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              handleClosingClick={handleClosingClick2}
              title={"Game Deals"}
              description={
                "NodeJS, Express, MongoDB, Bootstrap, Webpack, React, Heroku, HTML & CSS"
              }
              excerpt={
                "A personal project for users to buy, sell, and trade games anywhere in the world."
              }
              bulletPoints={
                "Account creation • Mongodb • Listing feature • wishlist feature • Search Feature • Deployment"
              }
              image1={ImageQuery.GameDealsDesktop}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-rtl d-none h-100"}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              handleClosingClick={handleClosingClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              title={"Game Apps"}
              description={"NodeJS, Express, Webpack, HTML, CSS, Heroku & PUG"}
              excerpt={
                "A personal project for users to compare and create lists for games worldwide."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.GameAppDesktop}
              overlayId={2}
              link={"https://netflix-react.herokuapp.com/"}
            ></OverlayItem>
          </>
        );
      case 2:
        return (
          <>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className={"OverlayItem_animation-ltr-2 d-none h-100 "}
              handleChangeOverlayClick={handleChangeOverlayClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              handleClosingClick={handleClosingClick2}
              title={"Game Deals"}
              description={
                "NodeJS, Express, MongoDB, Bootstrap, Webpack, React, Heroku, HTML & CSS"
              }
              excerpt={
                "A personal project for users to buy, sell, and trade games anywhere in the world."
              }
              bulletPoints={
                "Account creation • Mongodb • Listing feature • wishlist feature • Search Feature • Deployment"
              }
              image1={ImageQuery.GameDealsDesktop}
              overlayId={1}
              link={"https://heartsinmyoven.com/"}
            ></OverlayItem>
            <OverlayItem
              animationRefLtR={animationRefLtR}
              animationRefLtR2={animationRefLtR2}
              animationRefRtL={animationRefRtL}
              className="OverlayItem-main h-100"
              handleChangeOverlayClick={handleChangeOverlayClick2}
              handleClosingClick={handleClosingClick2}
              handleShowOverlayClick={handleShowOverlayClick2}
              title={"Game Apps"}
              description={"NodeJS, Express, Webpack, HTML, CSS, Heroku & PUG"}
              excerpt={
                "A personal project for users to compare and create lists for games worldwide."
              }
              bulletPoints={
                "Responsive design • Mobile Website • Tablet Website • Email system setup • Contact form setup • Deployment"
              }
              image1={ImageQuery.GameAppDesktop}
              overlayId={2}
              link={"https://netflix-react.herokuapp.com/"}
            ></OverlayItem>
          </>
        );
    }
  };
  return (
    <div className="Overlay" style={{ top: top }}>
      {renderOverlay()}
    </div>
  );
}
