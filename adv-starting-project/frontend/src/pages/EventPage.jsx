// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

// const DUMMY_Events = [
//   {
//     id: 'e1',
//     title: 'Event One',
//   },
//   {
//     id: 'e2',
//     title: 'Event Second',
//   },
//   {
//     id: 'e3',
//     title: 'Event Third',
//   },
// ];
function EventPage() {
  // const [isLoading, setIsLoading] = useState(false);

  // const [fetchedEvent, setFetchedEvent] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');
  //     if (!response.ok) {
  //       setError('Fetching event failed');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvent(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // .......
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
