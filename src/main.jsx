import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Chat from "./pages/chat/chat";
import RouteLayout from "./layouts/routeLayout/routeLayout";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout";

const router = createBrowserRouter([
  {
    element: <RouteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in/*", element: <Login /> },
      { path: "/sign-up/*", element: <Register /> },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/dashboard/chats/:id", element: <Chat /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
