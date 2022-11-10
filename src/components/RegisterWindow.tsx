import { CSSProperties } from "react";
import {
  Paper,
  Button,
  Typography,
  TextField,
  Link,
  FormHelperText,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { MouseEventHandler, useState } from "react";
import { useFormik, FormikProps } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
  IRegisterInitialValues,
  registerApiCall,
} from "../data/registerValidation";
import axios from "axios";
import { ErrorResponse } from "@remix-run/router";

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

interface IRegisterProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RegisterWindow = ({ onClick }: IRegisterProps) => {
  const [backendError, setBackendError] = useState("");

  const registerFormik: FormikProps<IRegisterInitialValues> = useFormik({
    initialValues: { ...registerInitialValues },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setBackendError("");
      registerApiCall(values)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err.response.data.message);
          setBackendError(err.response.data.message);
        });
    },
  });

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

      {/* nickname input */}
      <form style={formStyle} onSubmit={registerFormik.handleSubmit}>
        <TextField
          label="Nickname"
          name="nickname"
          id="nickname"
          type="text"
          sx={{ margin: "5px", width: "0.6" }}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.nickname &&
            Boolean(registerFormik.errors.nickname)
          }
          helperText={
            registerFormik.touched.nickname && registerFormik.errors.nickname
          }
        ></TextField>

        {/* email input */}

        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.email && Boolean(registerFormik.errors.email)
          }
          helperText={
            registerFormik.touched.email && registerFormik.errors.email
          }
          sx={{ margin: "10px", width: "0.6" }}
        ></TextField>

        {/* password input */}

        <TextField
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.password &&
            Boolean(registerFormik.errors.password)
          }
          helperText={
            registerFormik.touched.password && registerFormik.errors.password
          }
          label="password"
          sx={{ margin: "5px", width: "0.6" }}
        ></TextField>

        {/* confirm password input */}

        <TextField
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.confirmPassword &&
            Boolean(registerFormik.errors.confirmPassword)
          }
          helperText={
            registerFormik.touched.confirmPassword &&
            registerFormik.errors.confirmPassword
          }
          label="Confirm password"
          sx={{ margin: "5px", marginBottom: "15px", width: "0.6" }}
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ marginBottom: "10px" }}
        >
          Sign up
        </Button>
        <FormHelperText> {backendError} </FormHelperText>
      </form>
      <Typography variant="body2" marginTop={"5px"}>
        You have an account?{" "}
        <Button variant="text" onClick={onClick}>
          Sign in
        </Button>
      </Typography>
    </Paper>
  );
};

export default RegisterWindow;
