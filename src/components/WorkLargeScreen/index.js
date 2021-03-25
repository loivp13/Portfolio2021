import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import anime from "animejs/lib/anime.es.js";
import { useMediaQuery } from "react-responsive";
import CardLargeScreen from "./components/CardLargeScreen";

import "./_index.scss";

export default function WorkLargeScreen({
  handleShowOverlayClick,
  handleShowOverlayClick2,
  currentOverlay,
  currentOverlay2,
}) {
  const isLargerThanTablet = useMediaQuery({
    query: "(min-device-width: 1824px)",
  });
  const ImageQuery = useStaticQuery(graphql`
    {
      cleverAccountant: file(
        relativePath: {
          eq: "images/hero images without shadow/web - clever acc overlay desktop.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heartsInMyOven: file(
        relativePath: { eq: "images/hero images without shadow/hmoblog2_1.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netflix: file(
        relativePath: { eq: "images/hero images without shadow/netflix.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      infoArrow: file(
        relativePath: {
          eq: "images/Desktop/BUTTON (Overlay) - right arrow (next) (Hover State).png"
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
    console.log("showmore");
    showMoreAnimation.current = anime({
      targets: ".WorkLargeScreen_showMore",
      translateY: "0%",
      autoplay: true,
      duration: 450,
      easing: "linear",
      maxHeight: "1200px",
    });
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
    <div id="work" className="WorkLargeScreen">
      <div className=" h3 Work_title ">WORK</div>
      <div className="WorkLargeScreen_line-green"></div>
      <CardLargeScreen
        image={ImageQuery.cleverAccountant}
        title={"CLEVER ACCOUNTANTS"}
        description={"Gulp, HMTL5, SASS, Javascript"}
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={0}
      ></CardLargeScreen>
      <CardLargeScreen
        image={ImageQuery.heartsInMyOven}
        title={"Hearts in My Oven"}
        description={
          "WordPress Theme Development, PHP, WAMP, HMTL5, JavaScript, Print Feature, Recipe Filter"
        }
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={1}
      ></CardLargeScreen>
      <CardLargeScreen
        image={ImageQuery.netflix}
        title={"Netflix Replica"}
        description={"ReactJS, NodeJS, Express, Webpack, SASS, Heroku, API"}
        handleShowOverlayClick={handleShowOverlayClick}
        overlayId={2}
      ></CardLargeScreen>

      <div className="WorkLargeScreen_showMore">
        <CardLargeScreen
          infoArrow={ImageQuery.infoArrow}
          title={"My Foodie Diary"}
          description={
            "ReactJS, AWS S3, NodeJS, Express, Webpack, SASS, Digital Ocean, REST API"
          }
          handleShowOverlayClick={handleShowOverlayClick2}
          overlayId={0}
        ></CardLargeScreen>
        <CardLargeScreen
          forkedLines={<div className="WorkLargeScreen_forkedLines"></div>}
          infoArrow={ImageQuery.infoArrow}
          title={"Game Deals"}
          description={
            "NodeJS, Express, MongoDB, Bootstrap, Webpack, React, Heroku"
          }
          handleShowOverlayClick={handleShowOverlayClick2}
          overlayId={1}
        ></CardLargeScreen>
        <CardLargeScreen
          infoArrow={ImageQuery.infoArrow}
          title={"Game Apps"}
          description={"ReactJS, NodeJS, Express, Webpack, SASS, Heroku, API"}
          handleShowOverlayClick={handleShowOverlayClick2}
          overlayId={2}
        ></CardLargeScreen>
      </div>
    </div>
  );
}
