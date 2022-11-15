import {
  Paper,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { CSSProperties, MouseEventHandler, useState } from "react";
import { useFormik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginInitialValues,
  loginValidationSchema,
  ILoginInitialValues,
  loginApiCall,
} from "../data/loginValidation";
import { changeAuth } from "../store/authSlice";

// component used in Home Page

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
  // todo: take the backend error useState to page and pass it as a props
  const [backendError, setBackendError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFormik: FormikProps<ILoginInitialValues> = useFormik({
    initialValues: { ...loginInitialValues },

    validationSchema: loginValidationSchema,

    // onSubmit use loginApiCall, coming from the loginValidation file, also use replace: true in navigation to remove loginPage from history
    onSubmit: async (values) => {
      console.log(values);
      loginApiCall(values)
        .then((res) => {
          if (values.dontLogout) {
            localStorage.setItem("userInfo", JSON.stringify(res.user));
          } else {
            sessionStorage.setItem("userInfo", JSON.stringify(res.user));
          }
          dispatch(changeAuth(res.user));
          navigate("/Books", { replace: true });
        })
        .catch((err) => {
          setBackendError(err.response.data.message);
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
        <FormHelperText> {backendError} </FormHelperText>
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
