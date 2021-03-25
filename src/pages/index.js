import React, { useState } from "react";

import Seo from "./Seo";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";
import Overlay2 from "./components/Overlay2";
import AboveTheFold from "./components/AboveTheFold";
import Work from "./components/Work";
import WorkLargeScreen from "./components/WorkLargeScreen";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import { useMediaQuery } from "react-responsive";

import "./_index.scss";

const Home = () => {
  const [state, setState] = useState({
    currentOverlay: 0,
    showOverlay: false,
    currentOverlay2: 0,
    showOverlay2: 0,
  });
  const { currentOverlay, showOverlay, currentOverlay2, showOverlay2 } = state;
  const handleChangeOverlayClick = (overlay) => {
    setState({
      ...state,
      currentOverlay: overlay,
    });
  };
  const handleChangeOverlayClick2 = (overlay) => {
    setState({
      ...state,
      currentOverlay2: overlay,
    });
  };
  const handleShowOverlayClick = (overlay) => {
    setState({
      showOverlay: !showOverlay,
      currentOverlay: overlay,
    });
  };
  const handleShowOverlayClick2 = (overlay) => {
    setState({
      showOverlay2: !showOverlay2,
      currentOverlay2: overlay,
    });
  };

  const minTabletSize = useMediaQuery({ query: "(min-device-width: 768px" });

  return (
    <main className="Home">
      <Seo></Seo>
      {showOverlay ? (
        <Overlay
          handleChangeOverlayClick={handleChangeOverlayClick}
          currentOverlay={currentOverlay}
          handleShowOverlayClick={handleShowOverlayClick}
        ></Overlay>
      ) : null}
      {showOverlay2 ? (
        <Overlay2
          handleChangeOverlayClick2={handleChangeOverlayClick2}
          currentOverlay2={currentOverlay2}
          handleShowOverlayClick2={handleShowOverlayClick2}
        ></Overlay2>
      ) : null}

      <AboveTheFold></AboveTheFold>
      {minTabletSize ? (
        <WorkLargeScreen
          currentOverlay={currentOverlay2}
          handleShowOverlayClick={handleShowOverlayClick}
          handleShowOverlayClick2={handleShowOverlayClick2}
        ></WorkLargeScreen>
      ) : (
        <Work
          currentOverlay={currentOverlay2}
          handleShowOverlayClick={handleShowOverlayClick}
          handleShowOverlayClick2={handleShowOverlayClick2}
        ></Work>
      )}
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default Home;
