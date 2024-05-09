import PropTypes from "prop-types";
import { useAuth } from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return "Loading........";
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
