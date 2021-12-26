import {
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setErrorMessageAndLoginErrorStatus,
} from "../reducer/user";

import { login } from "../../service/authentication";

export const loginAction = (credential) => async (dispatch) => {
  try {
    const response = await login(credential);
    dispatch(setAuthenticatedTrue());
    dispatch(
      setErrorMessageAndLoginErrorStatus({
        message: "",
        LoginErrorStatus: false,
      })
    );
  } catch (error) {
    console.log(error.response);
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
};
