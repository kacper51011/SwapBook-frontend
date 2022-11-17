import { createSlice } from "@reduxjs/toolkit";

interface IalertsInitialValues {
  success: string;
  error: string;
}
const initialState: IalertsInitialValues = {
  success: "",
  error: "",
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSuccess, setError } = alertsSlice.actions;
export default alertsSlice.reducer;
