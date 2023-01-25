import { Button, Typography, TextField, FormHelperText } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
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
          sx={{ width: "70%" }}
          variant="standard"
          {...nicknameProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.nickname &&
            Boolean(registerFormik.errors.nickname)
          }
          helperText={
            (registerFormik.touched.nickname &&
              registerFormik.errors.nickname) ||
            " "
          }
        ></TextField>

        {/* email input */}

        <TextField
          sx={{ width: "70%" }}
          variant="standard"
          {...emailProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.email && Boolean(registerFormik.errors.email)
          }
          helperText={
            (registerFormik.touched.email && registerFormik.errors.email) || " "
          }
        ></TextField>

        {/* password input */}

        <TextField
          variant="standard"
          sx={{ width: "70%" }}
          {...passwordProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.password &&
            Boolean(registerFormik.errors.password)
          }
          helperText={
            (registerFormik.touched.password &&
              registerFormik.errors.password) ||
            " "
          }
        ></TextField>

        {/* confirm password input */}

        <TextField
          variant="standard"
          sx={{ width: "70%" }}
          {...confirmPasswordProps}
          onChange={registerFormik.handleChange}
          onBlur={registerFormik.handleBlur}
          error={
            registerFormik.touched.confirmPassword &&
            Boolean(registerFormik.errors.confirmPassword)
          }
          helperText={
            (registerFormik.touched.confirmPassword &&
              registerFormik.errors.confirmPassword) ||
            " "
          }
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ marginBottom: "10px" }}
        >
          Sign up
        </Button>
        <FormHelperText error> {backendError || " "} </FormHelperText>
      </form>
      <Typography
        variant="body2"
        component="div"
        onClick={() => onClick(false)}
        marginTop={"5px"}
        fontWeight="600"
        sx={{ cursor: "pointer" }}
      >
        You have account? Click here!
      </Typography>
    </AuthContainer>
  );
};

export default RegisterWindow;
