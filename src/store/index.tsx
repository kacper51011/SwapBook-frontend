import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

//Even if the states will not change that often, I decided to use redux for a practice.

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
