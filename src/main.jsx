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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "chats/:id",
        element: <Chat />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
