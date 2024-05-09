import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
