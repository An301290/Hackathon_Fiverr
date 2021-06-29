import Navbar from "./components/NavBar";
import React, { useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import MapClick from "./Mapclick";
import MapView from "./MapView";
import LandingPage from "./Components/LandingPage";

function App() {

  const [viewport, setViewport] = useState({
    latitude: 52.520008,
    longitude: 13.404954,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  },[]);

  return (
    <>
      <Router>
        <Navbar />
        <MapView />
        {/* <LandingPage /> */}
        <Switch>
          <Route exact path="/create-new-event" component={MapClick} />
          <Route exact path="/show-events" component={MapView} />
          <Route exact path="/your-events" />
          <Route exact path="/change-city" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
