import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { reset } from "../store/alertsSlice";
interface ISnackBarItem {
  state: boolean;
  color: "success" | "info" | "warning" | "error";
  message: string;
}

const SnackBarItem = ({ state, color, message }: ISnackBarItem) => {
  const dispatch = useDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(reset());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={state}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} sx={{ width: "100%" }} color={color}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarItem;
