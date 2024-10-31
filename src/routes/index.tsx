import { AuthPage, SendRequestPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/request",
    element: <SendRequestPage />,
  },
]);
