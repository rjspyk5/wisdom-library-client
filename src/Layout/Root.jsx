import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};
