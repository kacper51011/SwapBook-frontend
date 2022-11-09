import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { idText } from "typescript";
import { IRegisterInitialValues } from "../data/registerValidation";
import { registerUser } from "./authService";

interface IauthInitialState {
  name: string | null;
  id: string | null;
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  message: string;
}

// todo: getting user from cookie

const initialState: IauthInitialState = {
  name: null,
  id: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const URL = "/users/signup";

// register will be needed in onSubmit function in registerWindow, I will use only "/users/signup" url cause of the written PROXY in package.json
export const register = createAsyncThunk(
  `/users/signup`,
  async (user: IRegisterInitialValues, thunkApi) => {
    try {
      const response = await axios.post(URL, user);
      if (response && response.status === 201) {
        let { id, nickname } = response.data;
        return response.data;
      }
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
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
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.nickname;
        state.id = action.payload.id;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
