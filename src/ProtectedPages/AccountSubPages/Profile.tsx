import { Box, Typography, Stack } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "../../components/ProfileSecondPaper";

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
      <Stack direction={"row"} justifyContent="space-around">
        <ProfilePaper xsWidth="0.15" smWidth="0.6" />
        <ProfileSecondPaper />
      </Stack>
    </Box>
  );
};

export default Profile;
