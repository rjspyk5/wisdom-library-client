import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./../Hooks/useAuth";

export const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then((r) => console.log(r))
      .catch((er) => console.log(er));
  };
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
    <div className="sticky top-0 backdrop-blur-sm bg-[#251c1c36] w-full z-[50]">
      <div className="navbar bg-transparent">
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
          {user ? (
            <div className="flex items-center gap-2 md:gap-4">
              <h1>{user?.displayName}</h1>
              <div className="avatar">
                <div className="w-8 md:w-11 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn text-white font-bold md:btn-md btn-sm bg-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
