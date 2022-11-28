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

import { changePhoto } from "../store/authSlice";

import useAlert from "../hooks/useAlert";
import usePhoto from "../hooks/usePhoto";

// component used in account/profile page

interface ISecondPaper {
  nickname?: string;
  email?: string;
  setUserData: (
    nickname?: string | undefined,
    email?: string | undefined,
    numberOfSwaps?: number | undefined
  ) => void;
}

const ProfileSecondPaper = ({ nickname, email, setUserData }: ISecondPaper) => {
  const dispatch = useDispatch();
  const [setAlert] = useAlert();
  // todo: useEditedValues or something and usePhotoChange

  // states used only for toggling normal mode and edit mode (Password is a textfield by default, so it dont have a toggle)
  const [nicknameEdit, toggleNicknameEdit] = useState<Boolean>(false);
  const [emailEdit, toggleEmailEdit] = useState<Boolean>(false);
  // states used for storing values of edited fields
  const [nicknameEditValue, setEditedNicknameValue] = useState("");
  const [emailEditValue, setEditedEmailValue] = useState("");
  const [passwordEditValue, setEditedPasswordValue] = useState("");
  const [setEditedPhotoValue, handlePhotoChangeSave] = usePhoto();

  // todo: change the useeffect in profile and handlers below to instantly update the data

  const handleNicknameChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        nickname: nicknameEditValue,
      });

      toggleNicknameEdit(!nicknameEdit);
      setUserData((nickname = nicknameEditValue));
      setAlert("success", "nickname changed successfully");
    } catch (err) {
      setAlert("error", "something went wrong, try other nickname");
    }
  };

  const handleEmailChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        email: emailEditValue,
      });
      setAlert("success", "Email changed successfuly!");
      setUserData((email = emailEditValue));
      toggleEmailEdit(!emailEdit);
    } catch (err) {
      setAlert("error", "Something went wrong, try other Email");
    }
  };

  const handlePasswordChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        password: passwordEditValue,
      });
      setAlert("success", "password changed successfully");
    } catch (err) {
      setAlert("success", "something went wrong, try other Password");
    }
  };

  // handling the button Click

  // const handlePhotoChangeSave: React.MouseEventHandler = () => {
  //   const photoCall = async () => {
  //     const data = new FormData();
  //     if (photo) {
  //       data.append("photo", photo);
  //     }

  //     try {
  //       if (photo) {
  //         const newUserData = await axios.post(
  //           "/api/users/account/upload",
  //           data
  //         );
  //         dispatch(changePhoto(newUserData.data.data));

  //         setAlert("success", "photo set successfully");
  //       }
  //     } catch (err) {
  //       setAlert("error", "Something went wrong, try other image");
  //     }
  //   };

  //   photoCall();
  // };

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
        <Grid item xs={12} flexDirection="row" justifyContent="space-around">
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
