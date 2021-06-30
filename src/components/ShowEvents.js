import React, { useState } from "react";
import "../styles/LandingPage.css";
<<<<<<< HEAD
import Navbar from "./NavBar";
=======
import countries from "../Data/data.js";
>>>>>>> 35ef89e11e9ebf75e9150a95618a3da99e19a60b

function ShowEvents({ viewport, setViewport }) {
  return (
    <>
    <Navbar />
      <div className="main-div">
        <a href="#" className="country-berlin">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Berlin
        </a>
        <a href="#" className="country-budapest">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Budapest
        </a>
        <a href="#" className="country-paris">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Paris
        </a>
        <a
          href=""
          className="country-lisbon"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Lisbon
        </a>
      </div>
    </>
  );
}

export default ShowEvents;
