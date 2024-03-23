import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/About.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ContactPage from './pages/Contact.jsx';
import ResumePage from './pages/Resume.jsx';

const script = document.createElement('script');
script.src = "";
script.crossOrigin = "";
document.body.appendChild(script);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);