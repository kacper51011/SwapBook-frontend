import { Box, Paper } from "@mui/material";
import Image from "mui-image";
import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import BooksForSwapPage from "../BooksForSwapPage/BooksForSwapPage";
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";
import { ReactComponent as HomePageImage } from "../../utils/HomePageImage.svg";

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
        color: "primary",
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
        <HomePageImage />
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
