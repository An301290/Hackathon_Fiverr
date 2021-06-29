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
        <nav class="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 md:bg-transparent p-6 md:p-0">
          <ul>
            <li class="text-indigo-600 hover:underline">
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
