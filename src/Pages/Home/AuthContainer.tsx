import { ReactNode } from "react";
import { Box, Paper, Typography } from "@mui/material";

interface IAuthContainer {
  children: ReactNode;
  information: string;
  icon?: ReactNode;
}

// Container used in login and register window

const AuthContainer = ({ children, information, icon }: IAuthContainer) => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: { xs: "0.8", lg: "0.9" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
        borderRadius: "32px",
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
        fontWeight={600}
        my={2}
      >
        {information} {icon}
      </Typography>
      {children}
    </Paper>
  );
};

export default AuthContainer;
