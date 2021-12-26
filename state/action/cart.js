import { getCartByToken } from "../../service/cart";
import { getCart, addCart } from "../reducer/cart";

export const getCartByTokenAction = () => async (dispatch) => {
  try {
    const { data } = await getCartByToken();
    console.log(data.data.json_object, "data");
    dispatch(getCart(data.data.json_object));
  } catch (error) {}
};

export const addCartAction = (foormData) => async (dispatch) => {
  try {
    const { data } = await getCartByToken(foormData);
    console.log(data, "data");
    dispatch(getCart(data.data.json_object));
  } catch (error) {}
};
