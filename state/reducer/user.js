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
  },
});

export const { setUser, setAuthenticatedTrue, setAuthenticatedFalse } =
  userSlice.actions;

export default userSlice.reducer;
