import {
  Paper,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginWindow = () => {
  return (
    <Paper
      sx={{
        width: { xs: "0.8", lg: "0.5" },
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
        Sign in to SwapBook
        <LoginIcon />
      </Typography>

      <TextField placeholder="email" sx={{ padding: "5px" }}></TextField>
      <TextField placeholder="password" sx={{ margin: "5px" }}></TextField>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Remember password"
      />
      <Button variant="contained" size="medium" sx={{ marginBottom: "10px" }}>
        Sign in
      </Button>
      <Typography variant="body2" marginTop={"5px"}>
        You don't have an account yet? <Button variant="text">Sign up</Button>
      </Typography>
    </Paper>
  );
};

export default LoginWindow;
