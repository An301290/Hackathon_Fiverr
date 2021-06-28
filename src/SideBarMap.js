import { stubFalse } from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import countries from "./Data/data.js";

function SideBarMap({ sidebar, markerNumber, hideSideBar }) {
  return (
    <>
      {sidebar && (
        <div className="bg-gray-600 bg-opacity-100 h-screen w-1/3 left-0 fixed z-50 top-0">
          <button onClick={hideSideBar}>X</button>
          <h1>This is marker # {markerNumber}</h1>
          <h3 className="block p-4 text-black font-bold">
            {countries[markerNumber].city}
          </h3>
          <p>This is my favorite city</p>
          <img
            alt="Markerimg"
            src={countries[markerNumber].img}
            height="250px"
            width="320px"
          />
        </div>
      )}
      {/* <button className="ml-2 text-base bg-white z-50 " onClick={showSidebar}>
        Click
      </button> */}
    </>
  );
}

export default SideBarMap;
