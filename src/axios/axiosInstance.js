import axios from "axios";

const BASE_URL = "http://178.239.151.7:8095";
export default axios.create({
  baseURL: BASE_URL,
});

// axios private instannce
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Basic eWFzYTprYXNoaQ==",
  },
  
  withCredentials: true,
});
