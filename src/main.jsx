import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./comPonent/Root/Root.jsx";
import Home from "./comPonent/Home/Home.jsx";
import Login from "./ComPonent/Login/Login.jsx";
import Register from "./comPonent/SignuP_register/register.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import Order from "./ComPonent/Order/Order.jsx";
import PrivateRoute from "./Route/PrivateRoute.jsx";
import Profile from "./ComPonent/Profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/Profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />

    </AuthProviders>
  </StrictMode>
);
