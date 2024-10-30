// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

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
  const { events } = useLoaderData();
  // const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}> Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvent) => <EventsList events={loadedEvent} />}
      </Await>
    </Suspense>
  );
}

export default EventPage;

async function loadEvents() {
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
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader() {
  return defer({
    //remember defer function must take promises
    events: loadEvents(),
  });
}
