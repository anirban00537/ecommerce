import axios from "axios";
import Cookies from "js-cookie";
// https://galactic-escape-356951.postman.co/workspace/My-Workspace~e1dff801-3bf1-4e67-86fc-e4c665489247/request/12582813-ebca030a-13e7-46d5-8f2f-4d84a5f801f4

const service = axios.create({
  baseURL:
    "https://galactic-escape-356951.postman.co/workspace/My-Workspace~e1dff801-3bf1-4e67-86fc-e4c665489247/request/",

  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
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
