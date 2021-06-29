import React, { useState } from "react";
import MenuBarMap from "./MenuBarMap";
import Map from "./Map.js";
import SideBarMap from "./SideBarMap.js";
import left from "./left.png";
<<<<<<< HEAD
=======
import LandingPage from "./Components/LandingPage";
>>>>>>> 2a29c7a0f9e4576a36f5c5404b565abe30b68bf5

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
