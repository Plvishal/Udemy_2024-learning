// import React from 'react'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function ErrorPage() {
  const error = useRouteError();
  const title = 'Error an occured';
  let message = 'Something went wrong';
  console.log(error);
  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
