import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
  },
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;
