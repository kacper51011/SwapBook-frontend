import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface IProfileContainer {
  children1: React.ReactNode;
  children2: React.ReactNode;
}

const ProfileContainer = ({ children1, children2 }: IProfileContainer) => {
  return (
    <Box
      padding={3}
      width={{ xs: "100%", sm: "85%" }}
      sx={{ backgroundColor: "#F5F5F5" }}
      minHeight="40vw"
    >
      <Typography padding={2} variant="h2">
        My Profile
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: { xs: "reverse-column", sm: "row" },
          justifyContent: { xs: "center" },
        }}
      >
        <Grid item xs={8} sm={4}>
          {children1}
        </Grid>
        <Grid item xs={12} sm={8}>
          {children2}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileContainer;
