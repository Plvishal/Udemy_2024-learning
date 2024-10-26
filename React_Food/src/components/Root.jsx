import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import classes from './root.module.css';
function Root() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
