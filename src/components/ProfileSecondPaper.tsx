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
import { MouseEventHandler, useState } from "react";

// component used in account/profile page

interface ISecondPaper {
  actualNickname?: string;
  actualPassword?: string;
}

const ProfileSecondPaper = ({
  actualNickname,
  actualPassword,
}: ISecondPaper) => {
  const [nicknameEdit, toggleNicknameEdit] = useState<Boolean>(false);
  const [passwordEdit, togglePasswordEdit] = useState<Boolean>(false);
  const [emailEdit, toggleEmailEdit] = useState<Boolean>(false);

  const toggleNicknameEditHandler: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    toggleNicknameEdit(!nicknameEdit);
  };
  const togglePasswordEditHandler: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    togglePasswordEdit(!nicknameEdit);
  };
  const toggleEmailEditHandler: MouseEventHandler<HTMLButtonElement> = () => {
    toggleEmailEdit(!nicknameEdit);
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
      <Typography variant="h5" textAlign="center" marginBottom="1vw">
        Manage your data
      </Typography>

      <Divider orientation="horizontal" />
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
          {!nicknameEdit && <Typography>actualNickname</Typography>}
          {nicknameEdit && (
            <TextField
              label="Nickname"
              id="nicknameEdit"
              name="nicknameEdit"
              defaultValue={actualNickname}
            ></TextField>
          )}
        </Grid>
        <Grid item xs={1}>
          {!nicknameEdit && (
            <IconButton onClick={toggleNicknameEditHandler}>
              <EditIcon />
            </IconButton>
          )}
          {nicknameEdit && <Button>Save</Button>}
        </Grid>
      </Grid>
      <Divider orientation="horizontal" />

      {/* password */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={4} paddingY="1vw">
          <Typography fontWeight="bold">Your Password</Typography>
        </Grid>
        <Grid item xs={4}>
          {!passwordEdit && <Typography>actualPassword</Typography>}
          {passwordEdit && (
            <TextField
              type="password"
              label="Password"
              id="passwordEdit"
              name="passwordEdit"
              defaultValue={actualPassword}
            ></TextField>
          )}
        </Grid>

        <Grid item xs={1}>
          {passwordEdit && <Button>Save</Button>}
          {!passwordEdit && (
            <IconButton onClick={togglePasswordEditHandler}>
              <EditIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>

      <Divider orientation="horizontal" />
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
          {!emailEdit && <Typography>actualEmail</Typography>}
          {emailEdit && (
            <TextField
              label="email"
              id="emailEdit"
              name="emailEdit"
            ></TextField>
          )}
        </Grid>
        <Grid item xs={1}>
          {!emailEdit && (
            <IconButton onClick={toggleEmailEditHandler}>
              <EditIcon />
            </IconButton>
          )}
          {emailEdit && <Button>Save</Button>}
        </Grid>
      </Grid>
      <Divider orientation="horizontal" />

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
          <label htmlFor="photoEdit">
            <Button
              variant="contained"
              component="span"
              endIcon={<CameraAltIcon />}
            >
              Change your photo
            </Button>

            <input
              hidden
              type="file"
              accept="image/*"
              multiple
              name="photoEdit"
              id="photoEdit"
            />
          </label>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileSecondPaper;
