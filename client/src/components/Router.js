import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import QuoteList from '../pages/Quotes/QuoteList';
import QuoteDetail, {
  loader as quoteLoader,
} from '../pages/Quotes/QuoteDetail';
import Header from './Header';
import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/quotes',
    element: <QuoteList />,
  },
  {
    path: '/quotes/:id',
    element: <QuoteDetail />,
    loader: quoteLoader,
  },
]);

function Router() {
  return (
    <div className="App h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden">
      <Header />
      <div className="flex items-start justify-start w-full">
        <Navbar />
        <div className="w-full h-full px-4 py-4 items-start justify-center bg-primary-100">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default Router;
