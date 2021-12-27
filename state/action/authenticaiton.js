import {
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setUser,
} from "../reducer/user";
import Router from "next/router";
import {
  login,
  getProfileByToken,
  signup,
  sendEmailForGetPassword,
  verifyEmailOtpAndResetPassword,
} from "../../service/authentication";
import Cookie from "js-cookie";
export const loginAction =
  (credential, redirect, toast) => async (dispatch) => {
    try {
      const { data } = await login(credential);

      Cookie.set("token", data.data.json_object.token);
      dispatch(setAuthenticatedTrue());
      toast({
        title: "Login Success",
        description: "You have successfully logged in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      if (redirect) {
        Router.replace(redirect);
      } else {
        Router.replace("/");
      }
    } catch (error) {
      if (error.response) {
        dispatch(setAuthenticatedFalse());
        return {
          username: error.response.data.data.json_object.username,
          password: error.response.data.data.json_object.password,
        };
      } else {
        return {
          username: "",
          password: "",
        };
      }
    }
  };

export const signupAction = (credential) => async (dispatch) => {
  try {
    const { data } = await signup(credential);

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
  } catch (error) {}
};

export const logoutAction = () => (dispatch) => {
  Cookie.remove("token");
  dispatch(setAuthenticatedFalse());
  Router.replace("/");
};

export const sendEmailForGetPasswordAction = async (email, toast, setsteps) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    const { data } = await sendEmailForGetPassword(formData);
    if (data.status === 200) {
      toast({
        title: "Email send Successfully",
        description: "You have recieved a mail please check your email",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setsteps(2);
    }
  } catch (error) {
    toast({
      title: "Email send Failed",
      description: "Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const verifyEmailOtpAction = async (
  otp,
  email,
  password,
  password_confirmation,
  toast,
  setsteps
) => {
  try {
    const formData = new FormData();
    formData.append("otp", otp);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);
    const { data } = await verifyEmailOtpAndResetPassword(formData);
    if (data.status === 200) {
      toast({
        title: "Email Verified Successfully",
        description: "You have successfully verified your email",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setsteps(3);
    }
  } catch (error) {
    toast({
      title: "Email Verification Failed",
      description: "You have failed to verify your email",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};
