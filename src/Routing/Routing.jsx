import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "../Pages/ErrorPage";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home/Home";
import { AddBook } from "../Pages/AddBook";
import { PrivateRoute } from "./../Pages/PrivateRoute";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
