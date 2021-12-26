import { getProducts } from "../../service/products";

import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
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
