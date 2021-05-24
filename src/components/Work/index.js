import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import anime from "animejs/lib/anime.es.js";
import { useMediaQuery } from "react-responsive";
import Card from "./components/Card";

import "./_index.scss";

export default function Work({
  handleShowOverlayClick,
  handleShowOverlayClick2,
  currentOverlay,
  currentOverlay2,
}) {
  const isLargerThanTablet = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const ImageQuery = useStaticQuery(graphql`
    {
      cleverAccountant: file(
        relativePath: {
          eq: "images/Mobile/more sizes/Clever image group@3x.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heartsInMyOven: file(
        relativePath: {
          eq: "images/Mobile/more sizes/clever card image@3x.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netflix: file(
        relativePath: {
          eq: "images/Mobile/more sizes/clever card image-1@2x.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foodieDiary: file(
        relativePath: {
          eq: "images/Mobile/more sizes/clever card image-2@2x.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gameDeals: file(
        relativePath: {
          eq: "images/Mobile/more sizes/clever card image-3@2x.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gameApp: file(
        relativePath: {
          eq: "images/Mobile/more sizes/clever card image-4@2x.png"
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
  const [state, setState] = useState({ showingMoreWork: false });
  const { showingMoreWork } = state;

  let showMoreAnimation = useRef();

  useEffect(() => {
    showMoreAnimation.current = anime({
      targets: ".Work_showMore",
      translateY: "0%",
      autoplay: true,
      duration: 450,
      easing: "linear",
      maxHeight: "1600px",
    });

    if (window) {
      let WOW = require("wowjs");

      let wow = new WOW.WOW({
        boxClass: "wow-line",
        animateClass: "animated",
        offset: 200,
        mobile: true,
        live: false,
        callback: function (box) {},
        scrollContainer: null,
      });
      wow.init();
    }
  }, [showingMoreWork, currentOverlay]);

  const handleShowMoreWorkClick = () => {
    if (!showingMoreWork) {
      setState({
        ...state,
        showingMoreWork: !showingMoreWork,
      });
    } else if (showingMoreWork) {
      showMoreAnimation.current.reverse();
      showMoreAnimation.current.play();
      showMoreAnimation.current.finished.then(() => {
        setState({
          ...state,
          showingMoreWork: !showingMoreWork,
        });
      });
    }
  };

  return (
    <div id="work" className="Work">
      <div className=" h3 Work_title">WORK</div>
      <div className="Work_line-green wow-line animate__fadeInUp"></div>
      <Card
        image={ImageQuery.cleverAccountant}
        title={"CLEVER ACCOUNTANTS"}
        description={"Gulp, HMTL5, SASS, Javascript"}
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={0}
      ></Card>
      <Card
        image={ImageQuery.heartsInMyOven}
        title={"Hearts in My Oven"}
        description={
          "WordPress Theme Development, PHP, WAMP, HMTL5, JavaScript, Print Feature, Recipe Filter"
        }
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={1}
      ></Card>
      <Card
        image={ImageQuery.netflix}
        title={"Netflix Replica"}
        description={"ReactJS, NodeJS, Express, Webpack, SASS, Heroku, API"}
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={2}
      ></Card>
      <div
        className="Work_more boxShadow-light "
        onClick={handleShowMoreWorkClick}
      >
        {showingMoreWork ? "Less" : "More"} Work
      </div>
      {showingMoreWork ? (
        <div className="Work_showMore">
          <Card
            image={ImageQuery.foodieDiary}
            title={"My Foodie Diary"}
            description={
              "ReactJS, AWS S3, NodeJS, Express, Webpack, SASS, Digital Ocean, REST API"
            }
            handleShowOverlayClick={handleShowOverlayClick2}
            overlayId={0}
          ></Card>
          <Card
            image={ImageQuery.gameDeals}
            title={"Game Deals"}
            description={
              "NodeJS, Express, MongoDB, Bootstrap, Webpack, React, Heroku"
            }
            handleShowOverlayClick={handleShowOverlayClick2}
            overlayId={1}
          ></Card>
          <Card
            image={ImageQuery.gameApp}
            title={"Game Apps"}
            description={"ReactJS, NodeJS, Express, Webpack, SASS, Heroku, API"}
            handleShowOverlayClick={handleShowOverlayClick2}
            overlayId={2}
          ></Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
