import { getProducts, getProductDetails } from "../../service/products";

import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  getProductDetailsSuccess,
  getProductDetailsStart,
  getProductDetailsError,
} from "../reducer/products";

export const getProductsAction = (cat_id) => async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const { data } = await getProducts(cat_id);

    dispatch(getProductsSuccess(data.data.json_object.products));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};

export const getProductDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch(getProductDetailsStart());
    const { data } = await getProductDetails(id);
    dispatch(getProductDetailsSuccess(data.data.json_object.product));
  } catch (error) {
    dispatch(getProductDetailsError());
  }
};
