import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IauthInitialState {
  name: string | null;
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  message: string;
}

const initialState = {
  name: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
