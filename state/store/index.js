import { configureStore } from "@reduxjs/toolkit";

import User from "../reducer/user";
import Products from "../reducer/products";
import Cart from "../reducer/cart";

export default configureStore({
  reducer: {
    user: User,
    products: Products,
    cart: Cart,
  },
});
