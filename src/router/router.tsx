import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../pages/home/home.component";
import { Cases } from "../pages/cases/cases";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cases",
    element: <Cases />,
  },
  {
    path: "/cases/amb",
    element: <div>Amb</div>,
  },
]);
