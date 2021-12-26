//login
import request from "../utils/request";

export const login = (credential) => {
  return request.post("/login", credential);
};

export const getProfileByToken = () => {
  return request.get("/profile");
};
