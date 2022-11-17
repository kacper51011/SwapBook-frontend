import { createSlice } from "@reduxjs/toolkit";

interface IalertsInitialValues {
  success: string;
  successVisibility: boolean;
  error: string;
  errorVisibility: boolean;
}
const initialState: IalertsInitialValues = {
  success: "",
  successVisibility: false,
  error: "",
  errorVisibility: false,
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.successVisibility = true;
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.errorVisibility = true;
    },
    reset: (state) => {
      state.successVisibility = false;
      state.errorVisibility = false;
    },
  },
});

export const { setSuccess, setError, reset } = alertsSlice.actions;
export default alertsSlice.reducer;
