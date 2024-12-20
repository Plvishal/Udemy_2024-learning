import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Root from './components/Root';
import Error from './components/Error';
import ProductDetails from './components/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product', element: <Product /> },
      { path: '/product/:productId', element: <ProductDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
