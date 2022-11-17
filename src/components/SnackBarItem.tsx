import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface ISnackBarItem {
  state: boolean;
  color: "success" | "info" | "warning" | "error";
  message: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const SnackBarItem = ({ state, color, message, setter }: ISnackBarItem) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setter(false);
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
