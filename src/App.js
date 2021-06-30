import Navbar from "./components/NavBar";
import EventBox from "./components/EventBox";
import React, { useEffect, useState } from "react";

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
import axios from "axios";
import MapAllEvents from "./mapallevents";
import ShowEvents from "./components/ShowEvents.js";

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

  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      let response = await axios.get("/api/event");
      console.log(response.data);
      setEvents(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {/* <LandingPage/> */}
      <Router>
        <Navbar />
        {/*   <MapView /> */}
        {/* <LandingPage /> */}
        <Switch>
          <Route exact path="/create-new-event">
            <MapClick />
          </Route>
          <Route exact path="/show-events">
            <MapAllEvents events={events} />
            <MapView />
          </Route>
          <Route exact path="/your-events"></Route>
          <Route exact path="/landingpage">
            <LandingPage />
          </Route>
          <Route exact path="./event">
            <EventBox />
          </Route>

          <Route exact path="/landing">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
