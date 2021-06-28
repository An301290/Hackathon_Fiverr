import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Menu = () => {
    return (
       <Router>
      <div>
        <nav>
          <ul className="nav-bar">
            <li>
              <NavLink exact activeClassName="active" to="/create-new-event">
                Create New Event
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/show-events">
                Show Events
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/your-events">
                Your Events
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/change-city">
                Change City
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
        </Router>
    )
}

export default Menu
