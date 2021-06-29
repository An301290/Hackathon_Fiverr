import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Menu from "./Components/Menu";
import MapView from "./MapView";


function App() {
  return (
    <>
      <Menu />
      <LandingPage/>
      <Router>
        <Switch>
          <Route path="/create-new-event" />
          <Route path="/show-events" component={MapView} />
          <Route path="/your-events" />
          <Route path="/change-city" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
