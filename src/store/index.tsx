import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertsReducer from "./alertsSlice";

//Even if the states will not change that often, I decided to use redux for a practice.

// todo: create single SnackBar in Home, then create new reducer for it

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type appDispatch = typeof store.dispatch;
