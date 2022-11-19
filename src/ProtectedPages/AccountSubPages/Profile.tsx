import { Box, Typography, Grid } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "../../components/ProfileSecondPaper";
import { useState } from "react";

const Profile = () => {
  // to do: formik, check validation etc.
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
          <ProfilePaper
            xsWidth="1"
            smWidth="1"
            avatarMargin="7vw"
            email="123"
            nickname="123"
            swapsAmount={123}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProfileSecondPaper />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
