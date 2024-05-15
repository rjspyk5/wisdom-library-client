import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./../Hooks/useAuth";
import logo from "../assets/image/icons/logo.png";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user, logOut } = useAuth();
  const [darkMode, setdarkMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : "light"
  );

  const handleLogout = () => {
    logOut();
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("darkMode"));
  }, [darkMode]);
  const menu = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-orange-500 text-white focus:bg-orange-500 focus:text-white"
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      {user && (
        <li className="font-bold">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white focus:bg-orange-500 focus:text-white"
                : " "
            }
          >
            {" "}
            Add Book
          </NavLink>
        </li>
      )}
      {user && (
        <li className="font-bold">
          <NavLink
            to="/all"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white focus:bg-orange-500 focus:text-white"
                : ""
            }
          >
            {" "}
            All Books
          </NavLink>
        </li>
      )}
      {user && (
        <li className="font-bold">
          <NavLink
            to="/borrowed"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white focus:bg-orange-500 focus:text-white"
                : ""
            }
          >
            Borrowed Books
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="sticky top-0 backdrop-blur-sm bg-[#251c1c36] w-full z-[50]">
      <div className="navbar px-3 max-w-[1150px] mx-auto  bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-0 btn-ghost lg:hidden"
            >
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
          <Link
            to="/"
            className="btn px-0 btn-ghost text-sm font-bold md:text-xl"
          >
            <img className="w-10 hidden md:block" src={logo} alt="" />
            WisdomLibrary
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-1 md:gap-2">
              <h1 className="text-[10px] md:text-sm">{user?.displayName}</h1>
              <div className="avatar">
                <div className="w-7 md:w-9  rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn text-white font-bold  btn-sm px-[2px] md:px-3 bg-red-500"
              >
                Logout
              </button>
              <input
                onChange={(e) => {
                  e.target.checked
                    ? setdarkMode("night")
                    : setdarkMode("light");
                }}
                type="checkbox"
                checked={darkMode === "light" ? false : true}
                className="toggle theme-controller "
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm md:btn-md bg-green-500 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
