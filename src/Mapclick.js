import React, { useState } from "react";
import Map from "./Map.js";
import Basic from "./components/Form";
/* import LandingPage from "./components/LandingPage.js"; */

const MapClick = () => {
  const [sidebar, setSidebar] = useState(false);
  const [markerNumber, setMarkerNumber] = useState("");

  const showMarker = (index) => {
    setMarkerNumber((markerNumber) => {
      return (markerNumber = index);
    });
  };

  return (
    <div>
      <Basic />

      {/* <MenuBarMap /> */}

      <div className="main-map">
        <Map />
        <h1>This is the main Map-view</h1>
      </div>
    </div>
  );
};

export default MapClick;
