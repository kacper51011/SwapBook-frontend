import { Box, Container, Paper } from "@mui/material";
import React from "react";
import LoginWindow from "../components/LoginWindow";

const Home = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          height: "100%",
          width: "50%",
        }}
      >
        <Paper sx={{ height: "90%", width: "90%" }}></Paper>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginWindow />
      </Box>
    </Box>
  );
};

export default Home;
