import { NavLink, Outlet } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default MainNavigation;