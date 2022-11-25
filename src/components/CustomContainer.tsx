import { Container, Paper } from "@mui/material";
import React from "react";

interface ICustomContainer {
  children1?: React.ReactNode | undefined;
  children2?: React.ReactNode | undefined;
}

const CustomContainer = ({ children1, children2 }: ICustomContainer) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          marginY: "20px",
          paddingY: "20px",
          backgroundColor: "#F5F5F5",
          width: 1,
        }}
      >
        <Container>{children1}</Container>
      </Paper>
      {children2}
    </Container>
  );
};

export default CustomContainer;
