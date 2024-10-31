/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookies from "js-cookie";

export const BASE_URL = process.env.BASE_URL;
export const axiosConfig = () => {
  const token = Cookies.get("userToken");
  axios.defaults.headers.common["Authorization"] = token;
  axios.interceptors.request.use(
    (config: any) => {
      return {
        ...config,

        env: BASE_URL,
      };
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );
};
