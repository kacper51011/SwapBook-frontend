import React from "react";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../store/alertsSlice";

const useAlert = (typeOfAlert: "error" | "success", message: string) => {
  const dispatch = useDispatch();
  if (typeOfAlert === "error") {
    dispatch(setError(message));
  }
  if (typeOfAlert === "success") {
    dispatch(setSuccess(message));
  }
};

export default useAlert;
