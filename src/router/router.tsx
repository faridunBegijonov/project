import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
