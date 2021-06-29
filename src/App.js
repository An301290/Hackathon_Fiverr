import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "./MapView.js";
import MapView from "./MapView.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <MapView /></header>
    </div>
  );
}

export default App;
