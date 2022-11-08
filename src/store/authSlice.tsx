import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IauthInitialState {
  name: string | null;
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  message: string;
}

const initialState: IauthInitialState = {
  name: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register will be needed in onSubmit function in registerWindow, I will use only "/users/signup" url cause of the written PROXY in package.json
export const register = createAsyncThunk(`/users/signup`, async (user) => {
  try {
    return authService;
  } catch (error) {}
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
