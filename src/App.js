import React from "react";
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
      <Menu />
      <Router>
        <Switch>
          <Route path="/show-events">
            <MapView />
          </Route>
          <Route path="/show-events">
            <MapView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
