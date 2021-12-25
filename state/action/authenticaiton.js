import { setAuthenticatedTrue, setAuthenticatedFalse } from "../reducer/user";
import { login } from "../../service/authentication";

export const loginAction = (credential) => async (dispatch) => {
  const response = await login(credential);
  console.log(response);
  if (response.status === 200) {
    dispatch(setAuthenticatedTrue());
  } else {
    dispatch(setAuthenticatedFalse());
  }
};
