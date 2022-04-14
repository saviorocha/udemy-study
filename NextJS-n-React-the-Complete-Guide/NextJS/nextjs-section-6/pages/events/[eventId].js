import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFeaturedEvents, getEventById } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage({ event }) {
  // const router = useRouter();
  // console.log("event", event);
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  // console.log(path, "path");
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const event = await getEventById(params.eventId);

  return {
    props: { event: event },
    revalidate: 30,
  };
};

export default EventDetailPage;
