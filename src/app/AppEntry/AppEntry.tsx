import ReactDOM from "react-dom/client";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../AppRouter.tsx";
import { store } from "../../api/store.ts";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorBgTextActive: "black",
            colorText: "white",
            colorPrimary: "black",
            colorPrimaryHover: "black",
            borderRadius: 4,
            colorTextDisabled: "gray",
          },
        },
      }}
    >
      <React.StrictMode>
        <RouterProvider router={appRouter} />
      </React.StrictMode>
    </ConfigProvider>
  </Provider>
);
