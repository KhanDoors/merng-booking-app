import React from "react";
import "./EventItem.css";

const EventItem = props => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>$9.99</h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>Your Event</p>
      ) : (
        <button className="btn">View Details</button>
      )}
    </div>
  </li>
);

export default EventItem;
