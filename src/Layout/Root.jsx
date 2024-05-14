import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";
import { ScrollRestoration } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};
