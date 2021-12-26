import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    authenticated: false,
    error: {
      message: "",
      status: false,
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
    setErrorMessageAndStatus: (state, action) => {
      state.error.message = action.payload.message;
      state.error.status = action.payload.status;
    },
  },
});

export const {
  setUser,
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  setErrorMessageAndStatus,
} = userSlice.actions;

export default userSlice.reducer;
