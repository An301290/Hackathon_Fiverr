import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import MapView from "./MapView";
import Basic from "./components/Form.js";

function App() {
  return (
    <>
      <Menu />
      <Basic />
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
