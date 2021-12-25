import { configureStore } from "@reduxjs/toolkit";

import User from "../reducer/user";

export default configureStore({
  reducer: {
    user: User,
  },
});
