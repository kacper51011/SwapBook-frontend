import {
  Button,
  Typography,
  TextField,
  FormHelperText,
  SxProps,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { MouseEventHandler, useState } from "react";
import { useFormik, FormikProps } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
  IRegisterInitialValues,
  registerApiCall,
  emailProps,
  passwordProps,
  confirmPasswordProps,
  nicknameProps,
} from "../../data/registerValidation";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../../store/alertsSlice";
import AuthContainer from "./AuthContainer";
import { formStyle } from "../../data/loginValidation";
// component used in Home Page

interface IRegisterProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const inputStyle: SxProps = { margin: "10px", width: "0.6" };

const RegisterWindow = ({ onClick }: IRegisterProps) => {
  const [backendError, setBackendError] = useState("");

  const dispatch = useDispatch();

  const registerFormik: FormikProps<IRegisterInitialValues> = useFormik({
    initialValues: { ...registerInitialValues },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setBackendError("");
      registerApiCall(values)
        .then((res) => {
          dispatch(setSuccess("registered successfully!"));
          onClick(false);
        })

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
          {...nicknameProps}
          sx={inputStyle}
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
          {...emailProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.email && Boolean(registerFormik.errors.email)
          }
          helperText={
            registerFormik.touched.email && registerFormik.errors.email
          }
          sx={inputStyle}
        ></TextField>

        {/* password input */}

        <TextField
          {...passwordProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.password &&
            Boolean(registerFormik.errors.password)
          }
          helperText={
            registerFormik.touched.password && registerFormik.errors.password
          }
          sx={inputStyle}
        ></TextField>

        {/* confirm password input */}

        <TextField
          {...confirmPasswordProps}
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
          sx={{ inputStyle, marginBottom: "15px" }}
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
        <Button variant="text" onClick={() => onClick(false)}>
          Sign in
        </Button>
      </Typography>
    </AuthContainer>
  );
};

export default RegisterWindow;
