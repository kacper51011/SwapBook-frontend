import React from "react";
import {
  Paper,
  Button,
  Input,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginWindow = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        height: { sm: "200px", lg: "400px" },
        width: { sm: "200px", lg: "400px" },
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
        mb="30px"
      >
        Sign in to SwapBook
        <LoginIcon />
      </Typography>
      <FormGroup>
        <Input placeholder="email" sx={{ margin: "5px" }}></Input>
        <Input placeholder="password" sx={{ margin: "5px" }}></Input>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember password"
        />
        <Button variant="contained">Sign in</Button>
      </FormGroup>
    </Paper>
  );
};

export default LoginWindow;
