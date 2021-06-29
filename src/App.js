import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Menu from "./components/Menu";
=======
import LandingPage from "./Components/LandingPage";
import Menu from "./Components/Menu";
>>>>>>> d88aee5eb350bfeecaa40706d4d95ea50bf2128d
import MapView from "./MapView";
import Basic from "./components/Form.js";

function App() {
  return (
    <>
      <Menu />
      <Basic />
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
