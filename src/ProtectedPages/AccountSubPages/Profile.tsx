import { Box, Typography, Grid } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "../../components/ProfileSecondPaper";
import { useState } from "react";

const Profile = () => {
  // to do: formik, check validation etc.
  const [userData, setUserData] = useState();
  return (
    <Box
      padding={3}
      width={{ xs: "100%", sm: "85%" }}
      sx={{ backgroundColor: "#F5F5F5" }}
    >
      <Typography padding={2} variant="h2">
        My Profile
      </Typography>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={4}>
          <ProfilePaper xsWidth="1" smWidth="1" />
        </Grid>
        <Grid item xs={8}>
          <ProfileSecondPaper />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
