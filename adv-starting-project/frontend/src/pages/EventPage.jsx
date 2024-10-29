import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventsList from '../components/EventsList';

const DUMMY_Events = [
  {
    id: 'e1',
    title: 'Event One',
  },
  {
    id: 'e2',
    title: 'Event Second',
  },
  {
    id: 'e3',
    title: 'Event Third',
  },
];
function EventPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvent, setFetchedEvent] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');
      if (!response.ok) {
        setError('Fetching event failed');
      } else {
        const resData = await response.json();
        setFetchedEvent(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading ............</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvent && <EventsList events={fetchedEvent} />}
    </>
  );
}

export default EventPage;
