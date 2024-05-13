import axios from "axios";

import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const useAxiosSequre = () => {
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logout().then(() => <Navigate to="/login" />);
        return Promise.reject(error);
      }
    }
  );

  return axiosSecure;
};
