import axios from "axios";

const BASE_URL = "http://178.239.151.7:8095";

// axios instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  maxBodyLength: Infinity,
});

// axios private instannce
export const axiosPrivate = axios.create({
  baseURL: "https://api.yasakashi.ir",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
