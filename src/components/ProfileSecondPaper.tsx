import {
  Paper,
  TextField,
  Typography,
  Button,
  InputBase,
  FormControl,
} from "@mui/material";
import { Stack } from "@mui/system";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// component used in account/profile page

interface ISecondPaper {
  swapsLength?: number;
}

const ProfileSecondPaper = ({ swapsLength }: ISecondPaper) => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "1",
        height: "1",
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Typography>Change your nickname:</Typography>
        <TextField></TextField>
        <Button>Save</Button>
      </Stack>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Typography>Change your email:</Typography>
        <TextField type="email"></TextField>
        <Button>Save</Button>
      </Stack>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Typography>Change your photo:</Typography>
        <label htmlFor="photo">
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
            name="photo"
            id="photo"
          />
        </label>
      </Stack>
    </Paper>
  );
};

export default ProfileSecondPaper;
