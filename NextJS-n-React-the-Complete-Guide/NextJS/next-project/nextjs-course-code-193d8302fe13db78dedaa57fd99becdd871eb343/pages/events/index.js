import React from "react";
import useRouter from "next/router";
import EventList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter;
  const events = getAllEvents();

  function findEventsHanlder(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHanlder} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
