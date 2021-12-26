import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    authenticated: false,
    error: {
      message: "",
      LoginErrorStatus: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthenticatedTrue: (state) => {
      state.authenticated = true;
    },
    setAuthenticatedFalse: (state) => {
      state.authenticated = false;
    },
    setErrorMessageAndLoginErrorStatus: (state, action) => {
      state.error.message = action.payload.message;
      state.error.LoginErrorStatus = action.payload.LoginErrorStatus;
    },
  },
});

export const {
  setUser,
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setErrorMessageAndLoginErrorStatus,
} = userSlice.actions;

export default userSlice.reducer;
