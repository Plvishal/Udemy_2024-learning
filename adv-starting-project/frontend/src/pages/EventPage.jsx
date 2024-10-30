// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { json, useLoaderData } from 'react-router-dom';
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
  const data = useLoaderData();
  const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return <EventsList events={events} />;
}

export default EventPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // ......
    // return { isError: true, message: 'Could not fetch events' }; // first way error handling
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
    //   status: 500,
    // });

    throw json(
      {
        message: 'Could not fetch events',
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
