import React from "react";
import Navbar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage.js";
/* import Menu from "./Components/Menu"; */
import MapView from "./MapView";
import MapClick from "./Mapclick";

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
