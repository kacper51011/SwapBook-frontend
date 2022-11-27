import React, { ReactNode } from "react";
import { Paper, Typography } from "@mui/material";

interface IAuthContainer {
  children: ReactNode;
  information: string;
  icon?: ReactNode;
}

// Container used in login and register window

const AuthContainer = ({ children, information, icon }: IAuthContainer) => {
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
        {information} {icon}
      </Typography>
      {children}
    </Paper>
  );
};

export default AuthContainer;
