import { getCartByToken, deleteCartItem, addCart } from "../../service/cart";
import { getCart } from "../reducer/cart";

export const getCartByTokenAction = () => async (dispatch) => {
  try {
    const { data } = await getCartByToken();
    dispatch(getCart(data.data.json_object));
  } catch (error) {}
};

export const addCartAction = (foormData, toast) => async (dispatch) => {
  try {
    await addCart(foormData);
    const { data } = await getCartByToken();
    dispatch(getCart(data.data.json_object));
    toast({
      title: "Successfylly added to cart",
      description: "",
      status: "success",
      duration: 5000,
    });
  } catch (error) {}
};

export const deleteCartItemAction = (id) => async (dispatch) => {
  try {
    await deleteCartItem(id);
    const { data } = await getCartByToken();
    dispatch(getCart(data.data.json_object));
  } catch (error) {}
};
