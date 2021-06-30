import Event from "./Event";
import "./../index.css";
import React, { useState, useEffect } from "react";
const axios = require("axios");

const EventBox = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    console.log("I am calling the function here");

    axios.get("http://localhost:8000/api/event").then((response) => {
      console.log("I expect array of events and want to put it into state ");
      console.log(response);
      setEvents(response.data);
    });
  };

  useEffect(() => {
    console.log("I should be mounted now");
    fetchEvents();
  }, []);
  console.log("I am rendering...");
  return (
    <div className="event-box">
      {events.map((event) => {
        console.log(event);
        return (
          <div>
            {/* {event.name} */}
            <Event
              name={event.name}
              // date={event.date}
              desc={event.desc}
              owner={event.owner}
              location_name={event.location_name}
              participants={event.participants}
            ></Event>
          </div>
        );
      })}
    </div>
  );
};
export default EventBox;
