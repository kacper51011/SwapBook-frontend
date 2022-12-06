import { Box, Paper } from "@mui/material";
import Image from "mui-image";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import BooksForSwapPage from "../BooksForSwapPage/BooksForSwapPage";
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";

const Home = () => {
  const [displayRegisterWindow, setDisplayedWindow] = useState(false);
  const auth = useAppSelector((state) => state.auth?.user);

  return auth ? (
    <BooksForSwapPage />
  ) : (
    <Box
      sx={{
        minHeight: "50vw",
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
          height: "1",
          width: "0.5",
        }}
      >
        <Paper elevation={10} sx={{ height: "35vw", width: "45vw" }}>
          <Image
            fit="cover"
            src="http://localhost:5000//images/books/homePageIMG.jpg"
          />
        </Paper>
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
          <RegisterWindow onClick={setDisplayedWindow} />
        ) : (
          <LoginWindow onClick={setDisplayedWindow} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
