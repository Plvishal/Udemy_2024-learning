import { Link } from 'react-router-dom';

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
  return (
    <>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_Events.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventPage;
