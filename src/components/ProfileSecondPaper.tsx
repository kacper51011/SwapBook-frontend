import { Paper, TextField, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

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
        minWidth: "60%",
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
        <Button variant="contained">choose a photo</Button>
        <Typography>There is no photo chosen</Typography>
        <Button>Save</Button>
      </Stack>
    </Paper>
  );
};

export default ProfileSecondPaper;
