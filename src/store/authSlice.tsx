import { createSlice } from "@reduxjs/toolkit";

export interface Iuser {
  id: string | "";
  nickname: string | "";
  photo: string | "";
}

interface IauthInitialState {
  user: Iuser;
}

// checking the localStorage (if login was valid and doNotLogout was checked, then data is there)
// checking the sessionStorage (if login was valid and doNotLogout was unchecked, then data is there)
//  else ""

const userAuthCheck: Iuser = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") || "")
  : sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo") || "")
  : "";

const initialState: IauthInitialState = {
  user: userAuthCheck,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // this reducer will be used in login and logout functions
    changeAuth: (state, action) => {
      state.user = action.payload;
    },
    changePhoto: (state, action) => {
      state.user.photo = action.payload;
    },
  },
});
export const { changeAuth, changePhoto } = authSlice.actions;
export default authSlice.reducer;
