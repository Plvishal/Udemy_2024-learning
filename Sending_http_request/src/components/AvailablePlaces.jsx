import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/place');
        const resData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || 'Coult not fetch places,please try again later',
        });
      }

      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  if (error) {
    return <ErrorPage title={'An error occuered'} message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Fetching place data..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
