import { Box, Typography, Grid } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "../../components/ProfileSecondPaper";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setError } from "../../store/alertsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  // states that will store data that useEffect fetch at initial render
  // also states that will store the default values of inputs in ProfileSecondPaper
  const [fetchedNickname, setFetchedNickname] = useState<string>("");
  const [fetchedEmail, setFetchedEmail] = useState<string>("");
  const [fetchedNumberOfSwaps, setFetchedNumberOfSwaps] = useState<number>();
  const [fetchedPhoto, setFetchedPhoto] = useState("");

  useEffect(() => {
    const getPersonalData = async () => {
      try {
        const { data } = await axios.get("/api/users/account/profile");
        setFetchedEmail(data.user.email);
        setFetchedNickname(data.user.nickname);
        setFetchedNumberOfSwaps(data.user.swaps.length);
        setFetchedPhoto(data.user.photo);
        console.log(data);
      } catch (err) {
        dispatch(setError("couldn`t load the data, try again later"));
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
            image={`http://localhost:5000//images/users/${fetchedPhoto}`}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProfileSecondPaper
            email={fetchedEmail || ""}
            nickname={fetchedNickname || ""}
            setFetchedEmail={setFetchedEmail}
            setFetchedNickname={setFetchedNickname}
            setFetchedPhoto={setFetchedPhoto}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
