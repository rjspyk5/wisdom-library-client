import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <h1>hello</h1>
      <Outlet />
    </div>
  );
};
