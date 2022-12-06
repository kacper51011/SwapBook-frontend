import React from "react";
import { Container, Paper, Typography } from "@mui/material";

const SwapOfferContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          minHeight: "80%",
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vw",
          padding: "2vw",
        }}
      >
        <Typography variant="h2" margin={"1%"}>
          Your swap offer
        </Typography>

        <Typography variant="h6">
          Informations about the book you offer
        </Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default SwapOfferContainer;
