import { configureStore } from "@reduxjs/toolkit";

import User from "../reducer/user";
import Products from "../reducer/products";

export default configureStore({
  reducer: {
    user: User,
    products: Products,
  },
});
