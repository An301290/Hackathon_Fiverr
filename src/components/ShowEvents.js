import React, { useState } from "react";
import "../styles/LandingPage.css";
import Navbar from "./NavBar";

function ShowEvents({ viewport, setViewport }) {
  return (
    <>
    <Navbar />
      <div className="main-div">
        <a href="" className="country-berlin">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Berlin
        </a>
        <a href="/budapest" className="country-budapest">
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
        <a href="#" className="country-lisbon">
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