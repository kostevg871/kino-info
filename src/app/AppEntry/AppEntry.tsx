import ReactDOM from "react-dom/client";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../AppRouter.tsx";
import { store } from "../../api/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
