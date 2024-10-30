// import React from 'react'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function ErrorPage() {
  const error = useRouteError();
  let title = 'Error an occured';
  let message = 'Something went wrong';
  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resourses or page';
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
