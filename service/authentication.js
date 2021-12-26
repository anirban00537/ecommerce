import request from "../utils/request";

export const login = (credential) => {
  return request.post("/login", credential);
};

export const signup = (credential) => {
  return request.post("/register", credential);
};

export const getProfileByToken = () => {
  return request.get("/profile");
};

export const sendEmailForGetPassword = (email) => {
  return request.post("/password/reset", email);
};
