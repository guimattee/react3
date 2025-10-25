import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import {Home, Posts, NotFound} from "./pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Posts",
    element: <Posts/>
  },
    {
    path: "*",
    element: <NotFound/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>,
)
