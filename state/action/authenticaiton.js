import {
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setErrorMessageAndLoginErrorStatus,
  setUser,
} from "../reducer/user";
import Router from "next/router";
import { login, getProfileByToken } from "../../service/authentication";
import Cookie from "js-cookie";
export const loginAction = (credential) => async (dispatch) => {
  try {
    const { data } = await login(credential);

    Cookie.set("token", data.data.json_object.token);
    dispatch(setAuthenticatedTrue());
    dispatch(
      setErrorMessageAndLoginErrorStatus({
        message: "",
        LoginErrorStatus: false,
      })
    );
    Router.push("/");
  } catch (error) {
    if (error.response) {
      dispatch(setAuthenticatedFalse());
      dispatch(
        setErrorMessageAndLoginErrorStatus({
          message: error.response.data.data.json_object.username,
          LoginErrorStatus: true,
        })
      );

      setTimeout(() => {
        dispatch(
          setErrorMessageAndLoginErrorStatus({
            message: "",
            LoginErrorStatus: false,
          })
        );
      }, 5000);
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
