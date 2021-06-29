import React, { useState } from "react";
import MenuBarMap from "./MenuBarMap";
import Map from "./Map.js";
import SideBarMap from "./SideBarMap.js";
import left from './left.png'

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
      {/* <MenuBarMap /> */}
      <SideBarMap
        hideSideBar={hideSideBar}
        sidebar={sidebar}
        markerNumber={markerNumber}
      />
      <div className="main-map">
        <img src={left} />
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
