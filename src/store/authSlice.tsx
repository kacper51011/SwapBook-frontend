import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IRegisterInitialValues } from "../data/registerValidation";

interface Iuser {
  id: string;
  nickname: string;
}

interface IauthInitialState {
  user: Iuser | "";
}

// checking the localStorage (if login was valid and doNotLogout was checked, then data is there)
// checking the sessionStorage (if login was valid and doNotLogout was unchecked, then data is there)
//  else ""

const userAuthCheck: IauthInitialState = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") || "")
  : sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo") || "")
  : "";

const initialState = {
  user: userAuthCheck,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
