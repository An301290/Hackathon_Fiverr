import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";

import React, { useState, useEffect } from "react";

import img from "./pin/map-42871_1280@3x.png";

import "./styles/map.css";

import * as d3 from "d3-ease";

import countries from "./Data/data.js";

require("dotenv").config();

export default function Maps(props) {
  const [viewport, setViewport] = useState({
    latitude: 52.520008,

    longitude: 13.404954,

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
    console.log(e.lngLat);

    a = e.lngLat;

    console.log(a);
  };

  const onClick = () => {
    setLocation(null);

    props.hideSideBar();
  };

  // const goToNYC = () => {

  // setViewport({

  // ...viewport,

  // latitude: 52.520008,

  // longitude: 13.404954,

  // zoom: 5,

  // transitionDuration: 5000,

  // transitionInterpolator: new FlyToInterpolator(),

  // transitionEasing: d3.easeCubic,

  // });

  // };

  // useEffect(() => {

  // goToNYC();

  // });

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
        onClick={onClick}
      >
        {countries.map((deutsch, index) => (
          <Marker
            key={deutsch.city}
            latitude={deutsch.lat}
            longitude={deutsch.lng}
            offsetTop={(-viewport.zoom * 4) / 2}
          >
            <button
              className="marker_button"
              onClick={(e) => {
                e.preventDefault();

                setLocation(index);

                props.showSidebar();

                props.showMarker(index, deutsch.lat);
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
        ))}

        {/* {countries.map((deutsch, index) =>

 location === index ? (

 <Popup

 latitude={deutsch.lat}

 longitude={deutsch.lng}

 onClose={() => {

 setLocation(null);

 }}

 >

 <div>

 <h3 className="block p-4 text-black font-bold">

 {deutsch.city}

 </h3>

 <p>This is my favorite city</p>

 <img

 alt="Markerimg"

 src={deutsch.img}

 height="250px"

 width="320px"

 />

 </div>

 </Popup>

 ) : null

 )} */}
      </ReactMapGL>
    </div>
  );
}
