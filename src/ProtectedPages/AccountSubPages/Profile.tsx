import { Box, Typography, Grid } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "../../components/ProfileSecondPaper";
import { useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../hooks/useAppSelector";
import useAlert from "../../hooks/useAlert";
import useFetchedUser from "../../hooks/useFetchedUser";

const Profile = () => {
  const [setAlert] = useAlert();
  const auth = useAppSelector((state) => state.auth?.user);

  const [fetchedNickname, fetchedEmail, fetchedNumberOfSwaps, { setUserData }] =
    useFetchedUser();

  useEffect(() => {
    const getPersonalData = async () => {
      try {
        const { data } = await axios.get("/api/users/account/profile");
        setUserData(
          data.user.nickname,
          data.user.email,
          data.user.swaps.length
        );
      } catch (err) {
        setAlert("error", "couldn`t load the data, try again later");
      }
    };
    getPersonalData();
  });

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
            email={fetchedEmail || ""}
            nickname={fetchedNickname || ""}
            swapsAmount={fetchedNumberOfSwaps || 0}
            image={
              auth.photo
                ? `http://localhost:5000//images/users/${auth.photo}`
                : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProfileSecondPaper
            email={fetchedEmail || ""}
            nickname={fetchedNickname || ""}
            setUserData={setUserData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
