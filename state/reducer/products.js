import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsError } =
  productsSlice.actions;
export default productsSlice.reducer;
