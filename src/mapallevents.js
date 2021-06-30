import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState, useEffect } from "react";
import img from "./pin/map-42871_1280@3x.png";
import "./styles/map.css";
import axios from "axios";
import countries from "./Data/datas.js";

require("dotenv").config();

export default function MapAllEvents({ events }) {
  const [viewport, setViewport] = useState({
    latitude: 52.520008718726341,
    longitude: 13.404954765281952,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  let a = [];
  const handleAddClick = (e) => {
    a = e.lngLat;
    console.log(a);
    sessionStorage.setItem("lastLat", e.lngLat[0]);
    sessionStorage.setItem("lastLng", e.lngLat[1]);
  };
  /* console.log("here", events[0].lat); */

  const onClick = () => {
    setLocation(null);
    /* props.hideSideBar(); */
  };
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYW5zYWhhIiwiYSI6ImNrcHBmbnhwdDB2aGoyb251bzdseHp2cDMifQ.En1UzaBe5gFYNvJIsUkJGQ"
        mapStyle="mapbox://styles/ansaha/ckq84pjop4xj217o6gsfjmm5w?optimize=true"
        onDblClick={handleAddClick}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {events.length &&
          events.map((event, index) => {
            console.log(event);

            return (
              <Marker latitude={event.lat} longitude={event.lng}>
                <button
                  className="marker_button"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img
                    src={img}
                    alt="Pin"
                    width={viewport.zoom * 3}
                    height={viewport.zoom * 4}
                  />
                </button>
              </Marker>
            );
          })}
      </ReactMapGL>
    </div>
  );
}
