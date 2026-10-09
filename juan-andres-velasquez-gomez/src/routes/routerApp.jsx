import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout/Layout';
import CatalogoPage from '../pages/CatalogoPage/CatalogoPage';
import ContactoPage from '../pages/ContactoPage/ContactoPage';
import HomePage from '../pages/HomePage/HomePage';

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalogo',
        element: <CatalogoPage />,
      },
      {
        path: 'contacto',
        element: <ContactoPage />,
      },
    ],
  },
]);
