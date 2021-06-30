import React, { useState } from "react";
import MapEvent from "./MapEvent.js";
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
      {/* <MenuBarMap /> */}

      <div className="map-event"></div>
      <div className="main-map">
        <h1>Please double click on the location to add an event.</h1>
        <MapEvent />
      </div>
      <Basic />
    </div>
  );
};

export default MapClick;
