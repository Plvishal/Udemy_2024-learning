import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/product', element: <Product /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
