import { Card, Paper, TextField, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

interface ISecondPaper {
  swapsLength: number;
}

const ProfileSecondPaper = ({ swapsLength }: ISecondPaper) => {
  return (
    <Paper>
      <Stack direction={"row"}>
        <Typography>Change your nickname:</Typography>
        <TextField></TextField>
      </Stack>
      <Stack>
        <Typography>Change your description:</Typography>
        <TextField></TextField>
      </Stack>
      <Stack>
        <Typography>Change your photo:</Typography>
        <Card>
          <Button></Button>
          <Typography></Typography>
        </Card>
      </Stack>
    </Paper>
  );
};

export default ProfileSecondPaper;
