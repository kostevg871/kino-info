import ReactDOM from "react-dom/client";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
