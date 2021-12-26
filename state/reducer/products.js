import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    detailsLoading: false,
    error: null,
    currentProduct: null,
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
    getProductDetailsStart: (state) => {
      state.detailsLoading = true;
    },
    getProductDetailsSuccess: (state, action) => {
      state.detailsLoading = false;
      state.currentProduct = action.payload;
    },
    getProductDetailsError: (state) => {
      state.detailsLoading = false;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  getProductDetailsSuccess,
  getProductDetailsStart,
} = productsSlice.actions;
export default productsSlice.reducer;
