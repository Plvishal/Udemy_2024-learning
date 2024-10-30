// import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useRouteLoaderData('event_detail');
  return (
    <>
      {/* <h1>Event Detail Page</h1>
      <p>Evvent Id : {params.EventItem}</p> */}
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventdetail_id;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      {
        message: 'Could not fetch detail for selected events',
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventdetail_id;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      {
        message: 'Could not delete events',
      },
      { status: 500 }
    );
  }
  return redirect('/events');
}
