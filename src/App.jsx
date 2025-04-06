import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import './App.css'
import AppLayout from './Layout/App Layout/AppLayout';
import Error from './Error/Error';
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Credits from './Pages/Credits';
import SingleStory from './Pages/SingleStory';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement:<Error/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/stories',
          element:<Stories />
        },
        {
          path:'/stories/:id',
          element:<SingleStory />
        },
        {
          path:'/credits',
          element:<Credits />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App