import React from "react";
import Navbar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu";
import MapView from "./MapView";


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/create-new-event" />
          <Route exact path="/show-events" component={MapView} />
          <Route exact path="/your-events" />
          <Route exact path="/change-city" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
