import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://wisdom-library-server.vercel.app",
});

export const useAxiosPublic = () => {
  return axiosPublic;
};
