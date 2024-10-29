import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Evvent Id : {params.eventdetail_id}</p>
    </>
  );
}

export default EventDetailPage;
