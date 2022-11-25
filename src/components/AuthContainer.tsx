import React, { PropsWithChildren, ReactNode } from "react";
import { Paper, Typography } from "@mui/material";

interface IAuthContainer {
  children: ReactNode;
  information: string;
}

const AuthContainer = ({ children, information }: IAuthContainer) => {
  return (
    <Paper
      sx={{
        width: { xs: "0.8", lg: "0.5" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "20px",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        variant="h5"
        component="span"
        pb="30px"
      >
        {information}
      </Typography>
      {children}
    </Paper>
  );
};

export default AuthContainer;
