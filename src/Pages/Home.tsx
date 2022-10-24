import { Box, Container, Paper } from "@mui/material";
import React, { useState } from "react";
import LoginWindow from "../components/LoginWindow";
import RegisterWindow from "../components/RegisterWindow";

const Home = () => {
  const [displayRegisterWindow, setDisplayedWindow] = useState(false);

  const showLoginWindow = () => {
    setDisplayedWindow(false);
  };
  const showRegisterWindow = () => {
    setDisplayedWindow(true);
  };

  return (
    <Box
      sx={{
        height: "100vh",
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
        <Paper sx={{ height: "70%", width: "90%" }}>sdsdsd</Paper>
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
        {displayRegisterWindow ? (
          <RegisterWindow onClick={showLoginWindow} />
        ) : (
          <LoginWindow onClick={showRegisterWindow} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
