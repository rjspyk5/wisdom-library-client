import axios from "axios";

import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://wisdom-library-server.vercel.app",
  withCredentials: true,
});

export const useAxiosSequre = () => {
  // const navigate = useNavigate();
  // const { logOut } = useContext(AuthProvider);

  const logOut = () => {
    return signOut(auth);
  };

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log(error);
        logOut().then(() => {
          <Navigate to="/login" />;
        });
        return Promise.reject(error);
      }
    }
  );

  return axiosSecure;
};
