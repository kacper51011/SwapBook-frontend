import { Paper, Button, Typography, TextField, Link } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const RegisterWindow = () => {
  return (
    <Paper
      sx={{
        width: { xs: "0.8", lg: "0.7" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "20px",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        variant="h5"
        component="span"
        pb="30px"
      >
        Sign up
        <LoginIcon />
      </Typography>
      <TextField
        placeholder="Nickname"
        name="nickname"
        id="nickname"
        type="text"
        sx={{ margin: "5px", width: "0.6" }}
        helperText="Nickname should include only letters, numbers and be at least 5 letters long."
      ></TextField>
      <TextField
        placeholder="Email"
        name="email"
        id="email"
        type="email"
        sx={{ margin: "10px", width: "0.6" }}
      ></TextField>
      <TextField
        placeholder="Password"
        type="password"
        name="password"
        id="password"
        sx={{ margin: "5px", width: "0.6" }}
      ></TextField>
      <TextField
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        id="confirmPassword"
        sx={{ margin: "5px", marginBottom: "15px", width: "0.6" }}
      ></TextField>

      <Button variant="contained" size="medium" sx={{ marginBottom: "10px" }}>
        Sign up
      </Button>
      <Typography variant="body2" marginTop={"5px"}>
        You have an account? <Button variant="text">Sign in</Button>
      </Typography>
    </Paper>
  );
};

export default RegisterWindow;
