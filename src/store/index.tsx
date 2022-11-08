import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

//Even if the states will not change that often, I decided to use redux for a practice.

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
