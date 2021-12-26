import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    authenticated: false,
    forgetPasswordStep: 1,
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
    stepOne: (state) => {
      state.forgetPasswordStep = 1;
    },
    stepTwo: (state) => {
      state.forgetPasswordStep = 2;
    },
    stepThree: (state) => {
      state.forgetPasswordStep = 3;
    },
  },
});

export const {
  setUser,
  setAuthenticatedTrue,
  setAuthenticatedFalse,
  stepOne,
  stepTwo,
  stepThree,
} = userSlice.actions;

export default userSlice.reducer;
