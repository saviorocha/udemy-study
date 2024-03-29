export async function getAllEvents() {
  const res = await fetch(
    "https://next-tutorial-77b29-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(eventId) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === eventId);
}

export async function getFilteredEvents({ year, month }) {
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
