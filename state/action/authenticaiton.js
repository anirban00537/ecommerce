import {
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setErrorMessageAndStatus,
} from "../reducer/user";
import { login } from "../../service/authentication";

export const loginAction = (credential) => async (dispatch) => {
  try {
    const response = await login(credential);
    dispatch(setAuthenticatedTrue());
    dispatch(setErrorMessageAndStatus({ message: "", status: false }));
  } catch (error) {
    console.log(error.response);
    dispatch(setAuthenticatedFalse());
    dispatch(
      setErrorMessageAndStatus({
        message: error.response.data.data.json_object.username,
        status: true,
      })
    );

    setTimeout(() => {
      dispatch(setErrorMessageAndStatus({ message: "", status: false }));
    }, 3000);
  }
};
