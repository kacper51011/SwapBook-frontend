import {
  Paper,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { CSSProperties, MouseEventHandler } from "react";
import { useFormik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import {
  loginInitialValues,
  loginValidationSchema,
  ILoginInitialValues,
  loginApiCall,
} from "../data/loginValidation";

interface ILoginProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const LoginWindow = ({ onClick }: ILoginProps) => {
  const navigate = useNavigate();

  const loginFormik: FormikProps<ILoginInitialValues> = useFormik({
    initialValues: { ...loginInitialValues },

    validationSchema: loginValidationSchema,

    // onSubmit use loginApiCall, coming from the loginValidation file, also use replace: true in navigation to remove loginPage from history
    onSubmit: async (values) => {
      console.log(values);
      loginApiCall(values)
        .then((res) => {
          console.log(res);
          navigate("/Books", { replace: true });
        })
        .catch((err) => {
          console.log(
            err.response.data.message
              ? err.response.data.message
              : err.response.data
          );
        });
    },
  });

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
      <form style={formStyle} onSubmit={loginFormik.handleSubmit}>
        {/* email input */}
        <TextField
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
          helperText={loginFormik.touched.email && loginFormik.errors.email}
          label="email"
          name="email"
          id="email"
          type="email"
        ></TextField>

        {/* password input */}

        <TextField
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          error={
            loginFormik.touched.password && Boolean(loginFormik.errors.password)
          }
          helperText={
            loginFormik.touched.password && loginFormik.errors.password
          }
          label="password"
          name="password"
          id="password"
          type="password"
          sx={{ margin: "5px" }}
        ></TextField>

        <FormControlLabel
          control={
            <Checkbox
              name="dontLogout"
              onChange={loginFormik.handleChange}
              id="dontLogout"
            />
          }
          label="Do not log me out"
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          sx={{ marginBottom: "10px" }}
        >
          Sign in
        </Button>
      </form>
      <Typography variant="body2" marginTop={"5px"}>
        You don't have an account yet?{" "}
        <Button variant="text" onClick={onClick}>
          Sign up
        </Button>
      </Typography>
    </Paper>
  );
};

export default LoginWindow;
