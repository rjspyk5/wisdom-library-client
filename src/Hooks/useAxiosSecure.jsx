import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        logout().then(() => navigate("/login"));
        return Promise.reject(err);
      }
    }
  );
  return axiosSecure;
};
