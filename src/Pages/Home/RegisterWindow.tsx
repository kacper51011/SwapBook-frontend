import { Button, Typography, TextField, FormHelperText } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { MouseEventHandler, useState } from "react";
import { useFormik, FormikProps } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
  IRegisterInitialValues,
  registerApiCall,
} from "../../data/registerValidation";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../../store/alertsSlice";
import AuthContainer from "./AuthContainer";
import { formStyle } from "../../data/loginValidation";
// component used in Home Page

interface IRegisterProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RegisterWindow = ({ onClick }: IRegisterProps) => {
  const [backendError, setBackendError] = useState("");

  const dispatch = useDispatch();

  const registerFormik: FormikProps<IRegisterInitialValues> = useFormik({
    initialValues: { ...registerInitialValues },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setBackendError("");
      registerApiCall(values)
        .then((res) => dispatch(setSuccess("registered successfully!")))
        .catch((err) => {
          console.log(err.response.data.message);
          setBackendError(err.response.data.message);
          dispatch(setError("Registering unsuccessfull"));
        });
    },
  });

  return (
    <AuthContainer information="Sign up to SwapBook" icon={<LoginIcon />}>
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
    </AuthContainer>
  );
};

export default RegisterWindow;