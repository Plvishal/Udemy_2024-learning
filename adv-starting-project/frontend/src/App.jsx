import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage, { loader as eventLoader } from './pages/EventPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteAction,
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './components/RootLayout';
import EventRootLayout from './pages/EventRootLayout';
import ErrorPage from './pages/ErrorPage';
import { action as manupulateEventAction } from './components/EventForm';
import NewsletterPage, {
  action as newsletterAction,
} from './components/NewsletterPage';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventLoader,
          },
          {
            path: ':eventdetail_id',
            id: 'event_detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manupulateEventAction,
              },
            ],
          },

          {
            path: 'new',
            element: <NewEventPage />,
            action: manupulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
