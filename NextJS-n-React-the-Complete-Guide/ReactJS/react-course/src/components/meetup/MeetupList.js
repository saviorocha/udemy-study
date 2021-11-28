import React, { useEffect } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  useEffect(() => {
    // console.log("caralho", props.meetups);
  }, []);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          // id={meetup.id}
          // image={meetup.image}
          // title={meetup.title}
          // address={meetup.address}
          // description={meetup.description}
          {...meetup}
        />
      ))}
    </ul>
  );
}
