import React from "react";
import EventItem from "./event-item";

import classes from "./event-list.module.css";

const EventList = ({ items }) => {
  // console.log("items", items);
  return (
    <div className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
