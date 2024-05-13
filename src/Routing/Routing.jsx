import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "../Pages/ErrorPage";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home/Home";
import { AddBook } from "../Pages/AddBook";
import { PrivateRoute } from "./../Pages/PrivateRoute";
import { AllBooks } from "../Pages/AllBooks/AllBooks";
import { Update } from "../Components/Update";
import { Category } from "../Pages/Home/CatagoriesSection/Category";
import { BookDetails } from "../Pages/BookDetails";
import { BorrowedBooks } from "../Pages/BorrowedBooks";

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
      {
        path: "/all",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/category/:category",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.category}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
