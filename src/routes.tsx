import React from 'react';

const Home = React.lazy(() => import('./pages/Home'))
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const Tutorial = React.lazy(() => import('./pages/Tutorial'))

const Dashboard = React.lazy(() => import('./pages/Dashboard'))

const routes = [
  {
    path: "/",
    element: <Home />,
    title: "LinkedClass - The Easiest Way to Manage your School"
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
    title: "About Us - The Easiest Way to Manage your School"
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
    title: "Tutorial - The Easiest Way to Manage your School"
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    title: "Dashboard"
  },
]

// template route
// {
//   path: "",
//   element: < />,
//   title: ""
// },

export default routes