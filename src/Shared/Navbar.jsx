import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 focus:bg-blue-600" : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 focus:bg-blue-600" : ""
          }
        >
          {" "}
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 focus:bg-blue-600" : ""
          }
        >
          {" "}
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowed"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 focus:bg-blue-600" : ""
          }
        >
          {" "}
          Borrowed Books
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
