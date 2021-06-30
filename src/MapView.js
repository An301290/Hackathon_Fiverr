import React, { useState } from "react";
import Navbar from "./components/NavBar";

import MenuBarMap from "./MenuBarMap";
import Map from "./Map.js";
import SideBarMap from "./SideBarMap.js";

import LandingPage from "./components/ShowEvents.js";

const MapView = () => {
  const [sidebar, setSidebar] = useState(false);
  const [markerNumber, setMarkerNumber] = useState("");

  const showSidebar = () => {
    setSidebar((sidebar) => {
      return (sidebar = true);
    });
  };

  const hideSideBar = () => {
    setSidebar((sidebar) => {
      return (sidebar = false);
    });
  };

  const showMarker = (index) => {
    setMarkerNumber((markerNumber) => {
      return (markerNumber = index);
    });
  };

  return (
    <div>
      <LandingPage />
      {/* <MenuBarMap /> */}
      <SideBarMap
        hideSideBar={hideSideBar}
        sidebar={sidebar}
        markerNumber={markerNumber}
      />
      <div className="main-map">
        <Map
          sidebar={sidebar}
          hideSideBar={hideSideBar}
          showSidebar={showSidebar}
          showMarker={showMarker}
        />
        <h1>This is the main Map-view</h1>
      </div>
    </div>
  );
};

export default MapView;
