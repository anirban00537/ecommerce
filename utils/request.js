import axios from "axios";
import Cookies from "js-cookie";

const service = axios.create({
  baseURL: "http://161.35.10.61/api/",

  headers: {
    Accept: "application/json",
  },
});

service.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use((response) => {
  return response;
});

export default service;
