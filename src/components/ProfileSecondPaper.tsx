import {
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../store/alertsSlice";

// component used in account/profile page

interface ISecondPaper {
  nickname?: string;
  email?: string;
  setFetchedEmail: React.Dispatch<React.SetStateAction<string>>;
  setFetchedNickname: React.Dispatch<React.SetStateAction<string>>;
  setFetchedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileSecondPaper = ({
  nickname,
  email,
  setFetchedEmail,
  setFetchedNickname,
  setFetchedPhoto,
}: ISecondPaper) => {
  const dispatch = useDispatch();

  // states used only for toggling normal mode and edit mode (Password is a textfield by default, so it dont have a toggle)
  const [nicknameEdit, toggleNicknameEdit] = useState<Boolean>(false);
  const [emailEdit, toggleEmailEdit] = useState<Boolean>(false);
  // states used for storing values of edited fields
  const [nicknameEditValue, setEditedNicknameValue] = useState("");
  const [emailEditValue, setEditedEmailValue] = useState("");
  const [passwordEditValue, setEditedPasswordValue] = useState("");
  const [photo, setEditedPhotoValue] = useState<File | null>(null);

  const handleNicknameChangeSave = async () => {
    try {
      await axios.patch("/api/users/account", {
        nickname: nicknameEditValue,
      });
      dispatch(setSuccess("nickname changed successfully"));
      setFetchedNickname(nicknameEditValue);
      toggleNicknameEdit(!nicknameEdit);
    } catch (err) {
      dispatch(setError("something went wrong, try other nickname"));
    }
  };

  const handleEmailChangeSave = async () => {
    try {
      await axios.patch("/api/users/account", {
        email: emailEditValue,
      });
      dispatch(setSuccess("nickname changed successfully"));
      setFetchedEmail(emailEditValue);
      toggleEmailEdit(!emailEdit);
    } catch (err) {
      dispatch(setError("something went wrong, try other nickname"));
    }
  };

  const handlePasswordChangeSave = async () => {
    try {
      await axios.patch("/api/users/account", {
        password: passwordEditValue,
      });
      dispatch(setSuccess("password changed successfully"));
    } catch (err) {
      dispatch(setError("something went wrong, try other password"));
    }
  };

  // handling the button Click

  const handlePhotoChangeSave: React.MouseEventHandler = () => {
    const photoCall = async () => {
      const data = new FormData();
      if (photo) {
        data.append("photo", photo);
      }

      try {
        if (photo) {
          await axios.post("/api/users/account/upload", data);

          dispatch(setSuccess("photo set successfully"));
        }
      } catch (err) {
        console.log(err);
        dispatch(setError("something went wrong, try other password"));
      }
    };

    photoCall();
  };

  // onChange`s and onClick`s are setted inline

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "1",
        minHeight: "1",
        padding: "1vw",
      }}
    >
      <Typography variant="h5" textAlign="center" marginBottom="1vw">
        Manage your data
      </Typography>

      <Divider orientation="horizontal" sx={{ marginY: "0.4vw" }} />

      {/* nickname */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={4}>
          <Typography fontWeight="bold" paddingY="1vw">
            Your Nickname
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {!nicknameEdit && <Typography>{nickname}</Typography>}
          {nicknameEdit && (
            <TextField
              type="text"
              label="Your Nickname"
              id="nicknameEdit"
              name="nicknameEdit"
              defaultValue={nickname}
              onChange={(e) => setEditedNicknameValue(e.target.value)}
            ></TextField>
          )}
        </Grid>
        <Grid item xs={1}>
          {!nicknameEdit && (
            <IconButton onClick={() => toggleNicknameEdit(!nicknameEdit)}>
              <EditIcon />
            </IconButton>
          )}
          {nicknameEdit && (
            <Button onClick={handleNicknameChangeSave}>Save</Button>
          )}
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginY: "0.4vw" }} />

      {/* email */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={4} paddingY="1vw">
          <Typography fontWeight="bold">Your Email</Typography>
        </Grid>
        <Grid item xs={4}>
          {!emailEdit && <Typography>{email}</Typography>}
          {emailEdit && (
            <TextField
              type="email"
              label="Your Email"
              id="emailEdit"
              name="emailEdit"
              defaultValue={email}
              onChange={(e) => setEditedEmailValue(e.target.value)}
            ></TextField>
          )}
        </Grid>
        <Grid item xs={1}>
          {!emailEdit && (
            <IconButton onClick={() => toggleEmailEdit(!emailEdit)}>
              <EditIcon />
            </IconButton>
          )}
          {emailEdit && (
            <Button onClick={() => handleEmailChangeSave}>Save</Button>
          )}
        </Grid>
      </Grid>
      {/* password */}
      <Divider orientation="horizontal" sx={{ marginY: "0.4vw" }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={4} paddingY="1vw">
          <Typography fontWeight="bold">Change password</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="password"
            label="New Password"
            id="passwordEdit"
            name="passwordEdit"
            onChange={(e) => setEditedPasswordValue(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={1}>
          <Button onClick={() => handlePasswordChangeSave}>Save</Button>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginY: "0.4vw" }} />

      {/* photo  */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        marginTop="2vw"
      >
        <Grid item xs={4}>
          <Typography fontWeight="bold">Photo</Typography>
        </Grid>
        <Grid item xs={4}>
          {/* <form
            encType="multipart/form-data"
            action="/api/users/account/upload"
            method="POST"
          > */}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => {
              if (e.target && e.target.files) {
                const myPhoto = e.target.files[0];
                setEditedPhotoValue(myPhoto);
              }
            }}
          />
          <Button
            variant="contained"
            endIcon={<CameraAltIcon />}
            // type="submit"
            onClick={handlePhotoChangeSave}
          >
            Save{" "}
          </Button>
          {/* </form> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileSecondPaper;
