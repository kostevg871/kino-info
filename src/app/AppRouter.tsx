import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout/BaseLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import SinglePage from "../pages/SinglePage/SinglePage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movie/:id", element: <SinglePage /> },
    ],
  },
]);
