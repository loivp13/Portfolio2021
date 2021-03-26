import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function AboveTheFold() {
  const [state, setState] = useState({ isMenuOpen: false });

  const { isMenuOpen } = state;
  const handleOnMenuClick = () => {
    setState({ ...state, isMenuOpen: !isMenuOpen });
  };
  return (
    <div className="AboveTheFold">
      <Header
        isMenuOpen={isMenuOpen}
        handleOnMenuClick={handleOnMenuClick}
      ></Header>
      <Navbar
        handleOnMenuClick={handleOnMenuClick}
        isMenuOpen={isMenuOpen}
      ></Navbar>
      <Hero></Hero>
    </div>
  );
}
