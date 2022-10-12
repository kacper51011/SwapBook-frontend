import React from "react";
import {
  Paper,
  Button,
  Input,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginWindow = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        variant="h6"
        component="span"
        pb="30px"
      >
        Sign in to SwapBook
        <LoginIcon />
      </Typography>
      <FormGroup>
        <TextField sx={{ padding: "5px" }}></TextField>
        <TextField placeholder="password" sx={{ margin: "5px" }}></TextField>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember password"
        />
        <Button variant="contained" size="small">
          Sign in
        </Button>
      </FormGroup>
    </Paper>
  );
};

export default LoginWindow;
