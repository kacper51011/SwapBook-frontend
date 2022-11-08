import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterInitialValues } from "../data/registerValidation";
import { registerUser } from "./authService";

interface IauthInitialState {
  name: string | null;
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  message: string;
}

// todo: getting user from cookie

const initialState: IauthInitialState = {
  name: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register will be needed in onSubmit function in registerWindow, I will use only "/users/signup" url cause of the written PROXY in package.json
export const register = createAsyncThunk(
  `/users/signup`,
  async (user: IRegisterInitialValues, thunkApi) => {
    return await registerUser(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state) => {
        state.isError = true;
      })
      .addCase(register.fulfilled, (state) => {});
  },
});

export default authSlice.reducer;
