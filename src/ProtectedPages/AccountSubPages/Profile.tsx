import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Box
      padding={3}
      width={{ xs: "100%", sm: "85%" }}
      sx={{ backgroundColor: "#F5F5F5" }}
    >
      <Typography padding={2} variant="h2">
        My Profile
      </Typography>
      <Stack padding={5}>
        <Typography variant="h4"></Typography>
      </Stack>
    </Box>
  );
};

export default Profile;
