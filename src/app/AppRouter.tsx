import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout/BaseLayout";
import { MainPage } from "../pages/MainPage/MainPage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [{ path: "/", element: <MainPage /> }],
  },
]);
