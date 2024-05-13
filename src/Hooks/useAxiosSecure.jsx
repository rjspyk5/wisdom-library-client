import axios from "axios";

import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
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
          window.location.href = "/login";
        });
        return Promise.reject(error);
      }
    }
  );

  return axiosSecure;
};
