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
import usePhoto from "../../hooks/usePhoto";
import useProfileDataUpdate from "../../hooks/useProfileDataUpdate";

// component used in account/profile page

interface ISecondPaper {
  nickname?: string;
  email?: string;
  setUserData: (
    nickname?: string,
    email?: string,
    numberOfSwaps?: number
  ) => void;
}

const ProfileSecondPaper = ({ nickname, email, setUserData }: ISecondPaper) => {
  // states used only for toggling normal mode and edit mode (Password is a textfield by default, so it dont have a toggle)
  const [nicknameEdit, toggleNicknameEdit] = useState<Boolean>(false);
  const [emailEdit, toggleEmailEdit] = useState<Boolean>(false);

  const [setEditedPhotoValue, handlePhotoChangeSave] = usePhoto();

  const [
    nicknameEditValue,
    emailEditValue,
    setEditedNicknameValue,
    setEditedEmailValue,
    setEditedPasswordValue,
    handleNicknameChangeSave,
    handleEmailChangeSave,
    handlePasswordChangeSave,
  ] = useProfileDataUpdate();

  const handleNicknameChange = () => {
    handleNicknameChangeSave();
    toggleNicknameEdit(!nicknameEdit);
    setUserData((nickname = nicknameEditValue));
  };

  const handleEmailChange = () => {
    handleEmailChangeSave();
    toggleEmailEdit(!emailEdit);
    setUserData((email = emailEditValue));
  };

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
      <Typography variant="h4" textAlign="center" mb="calc(0.2vw + 5px)">
        Manage your data
      </Typography>

      <Divider orientation="horizontal" sx={{ marginY: "calc(1.5vw + 5px)" }} />

      {/* nickname */}
      <Grid
        container
        direction="row"
        alignItems="center"
        height="0.3"
        justifyContent="space-around"
      >
        <Grid item xs={3}>
          <Typography fontSize={{ xs: "0.7rem", sm: "1rem" }} fontWeight="bold">
            Your Nickname
          </Typography>
        </Grid>
        <Grid item xs={5}>
          {!nicknameEdit && (
            <Typography fontSize={{ xs: "0.7rem", sm: "1rem" }}>
              {nickname}
            </Typography>
          )}
          {nicknameEdit && (
            <TextField
              sx={{ height: "0.5" }}
              fullWidth
              size="small"
              type="text"
              label="Your Nickname"
              id="nicknameEdit"
              name="nicknameEdit"
              defaultValue={nickname}
              onChange={(e) => setEditedNicknameValue(e.target.value)}
            ></TextField>
          )}
        </Grid>
        <Grid item xs={2}>
          {!nicknameEdit && (
            <IconButton onClick={() => toggleNicknameEdit(!nicknameEdit)}>
              <EditIcon />
            </IconButton>
          )}
          {nicknameEdit && (
            <Button
              color="error"
              size="small"
              onClick={() => toggleNicknameEdit(!nicknameEdit)}
            >
              Cancel
            </Button>
          )}
          {nicknameEdit && <Button onClick={handleNicknameChange}>Save</Button>}
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginY: "calc(1.5vw + 5px)" }} />

      {/* email */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={3}>
          <Typography fontWeight="bold" fontSize={{ xs: "0.7rem", sm: "1rem" }}>
            Your Email
          </Typography>
        </Grid>
        <Grid item xs={5}>
          {!emailEdit && (
            <Typography fontSize={{ xs: "0.7rem", sm: "1rem" }}>
              {email}
            </Typography>
          )}
          {emailEdit && (
            <TextField
              type="email"
              fullWidth
              size="small"
              label="Your Email"
              id="emailEdit"
              name="emailEdit"
              defaultValue={email}
              onChange={(e) => setEditedEmailValue(e.target.value)}
            ></TextField>
          )}
        </Grid>
        <Grid item xs={2} flexDirection="row">
          {!emailEdit && (
            <IconButton onClick={() => toggleEmailEdit(!emailEdit)}>
              <EditIcon />
            </IconButton>
          )}
          {emailEdit && (
            <Button
              color="error"
              size="small"
              onClick={() => toggleEmailEdit(!emailEdit)}
            >
              Cancel
            </Button>
          )}
          {emailEdit && (
            <Button size="small" onClick={() => handleEmailChange}>
              Save
            </Button>
          )}
        </Grid>
      </Grid>
      {/* password */}
      <Divider orientation="horizontal" sx={{ marginY: "calc(1.5vw + 5px)" }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={3}>
          <Typography fontWeight="bold" fontSize={{ xs: "0.7rem", sm: "1rem" }}>
            Change password
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            type="password"
            size="small"
            fullWidth
            label="New Password"
            id="passwordEdit"
            name="passwordEdit"
            onChange={(e) => setEditedPasswordValue(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={2}>
          <Button onClick={() => handlePasswordChangeSave}>Save</Button>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ marginY: "calc(1.5vw + 5px)" }} />

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
