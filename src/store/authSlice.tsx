import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IRegisterInitialValues } from "../data/registerValidation";

interface Iuser {
  Iuser: null;
}

interface IauthInitialState {
  user: Iuser | null;
}

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
