import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface ISnackBarItem {
  state: boolean;
  color: "success" | "info" | "warning" | "error";
  message: string;
}

const SnackBarItem = ({ state, color, message }: ISnackBarItem) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <Snackbar open={state} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} sx={{ width: "100%" }} color={color}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarItem;
