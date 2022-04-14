// import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage({ featuredEvents }) {
  console.log("featuredEvents", featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://next-tutorial-77b29-default-rtdb.firebaseio.com/events.json"
//   );
//   const eventsJson = await res.json();

//   const featuredEvents = [];
//   for (const key in eventsJson) {
//     // prettier-ignore
//     featuredEvents.push({
//       id:           key,
//       date:         eventsJson[key].date,
//       image:        eventsJson[key].image,
//       isFeatured:   eventsJson[key].isFeatured,
//       location:     eventsJson[key].location,
//       title:        eventsJson[key].title,
//       description:  eventsJson[key].description,
//     })
//   }

//   return {
//     props: {
//       featuredEvents: featuredEvents.filter((event) => event.isFeatured),
//     },
//   };
// };

export default HomePage;
