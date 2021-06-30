import Navbar from "./components/NavBar";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import MapClick from "./Mapclick";
import MapView from "./MapView";
import LandingPage from "./components/LandingPage";

function App() {
  const [viewport, setViewport] = useState(
    {
      latitude: 52.520008,
      longitude: 13.404954,
      width: "100vw",
      height: "100vh",
      zoom: 5,
    },
    []
  );

  return (
    <>
      {/* <LandingPage/> */}
      <Router>
        <Navbar />
<<<<<<< HEAD
=======
      {/*   <MapView /> */}
        {/* <LandingPage /> */}
>>>>>>> ba7a1efb8b145f4bddf4436e3aea9e7aa287a2f2
        <Switch>
          <Route exact path="/create-new-event" component={MapClick} />
          <Route exact path="/show-events" component={MapView} />
          <Route exact path="/your-events" />
<<<<<<< HEAD
          <Route exact path="/change-city" />
          <Route path="/event" component={EventBox} />
=======
          <Route exact path="/change-city" component={LandingPage} />
>>>>>>> ba7a1efb8b145f4bddf4436e3aea9e7aa287a2f2
        </Switch>
      </Router>
    </>
  );
}

export default App;
