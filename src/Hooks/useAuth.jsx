import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthProvider";

export const useAuth = () => {
  const contextData = useContext(AuthProvider);
  return contextData;
};
