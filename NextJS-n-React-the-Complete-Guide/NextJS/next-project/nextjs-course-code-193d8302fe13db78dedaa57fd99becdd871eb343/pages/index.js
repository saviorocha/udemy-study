import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/events-list";

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
