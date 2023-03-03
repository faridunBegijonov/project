import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../pages/home/home.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
