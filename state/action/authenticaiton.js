import {
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setUser,
} from "../reducer/user";
import Router from "next/router";
import { login, getProfileByToken, signup } from "../../service/authentication";
import Cookie from "js-cookie";
export const loginAction = (credential) => async (dispatch) => {
  try {
    const { data } = await login(credential);

    Cookie.set("token", data.data.json_object.token);
    dispatch(setAuthenticatedTrue());

    Router.replace("/");
  } catch (error) {
    if (error.response) {
      dispatch(setAuthenticatedFalse());

      return {
        username: error.response.data.data.json_object.username,
        password: error.response.data.data.json_object.password,
      };
    }
  }
};

export const signupAction = (credential) => async (dispatch) => {
  try {
    const { data } = await signup(credential);
    console.log(data, "data register");
    Cookie.set("token", data.data.json_object.token);
    dispatch(setAuthenticatedTrue());
    Router.replace("/");
  } catch (error) {
    if (error.response) {
      dispatch(setAuthenticatedFalse());
      return {
        username: error.response.data.data.json_object.username,
        password: error.response.data.data.json_object.password,
        email: error.response.data.data.json_object.email,
        phone: error.response.data.data.json_object.phone,
      };
    } else {
      return {};
    }
  }
};

export const getProfileByTokenAction = (token) => async (dispatch) => {
  try {
    const { data } = await getProfileByToken(token);

    dispatch(setUser(data.data.json_object));
  } catch (error) {}
};

export const CheckAuthState = () => (dispatch) => {
  try {
    const token = Cookie.get("token");
    if (token) {
      dispatch(setAuthenticatedTrue());
    } else {
      dispatch(setAuthenticatedFalse());
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const logoutAction = () => (dispatch) => {
  Cookie.remove("token");
  dispatch(setAuthenticatedFalse());
  Router.replace("/");
};
