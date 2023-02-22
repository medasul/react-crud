import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import SingleProductPage from 'pages/single-product-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SingleProductPage.path,
        element: <SingleProductPage />,
      },
    ],
  },
]);

export default router;
