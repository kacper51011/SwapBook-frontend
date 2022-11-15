import { Paper } from "@mui/material";
import React from "react";

const Footer = () => {
  // component used in every page

  return (
    <Paper
      component="footer"
      square
      sx={{
        bottom: "0",
        width: "100%",
        height: "30px",
        position: "static",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      Created By Kacper Tylec
    </Paper>
  );
};

export default Footer;
