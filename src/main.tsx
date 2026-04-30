import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import './index.css'
import ShowcaseTheme from './pages/Showcase';
import ThemeInput from "./pages/ThemeInput";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeInput />,
  },
  {
    path: "/showcase",
    element: <ShowcaseTheme />,
  },

]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
