import {
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { useFormik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginInitialValues,
  loginValidationSchema,
  ILoginInitialValues,
  loginApiCall,
  passwordProps,
  emailProps,
} from "../../data/loginValidation";
import { changeAuth } from "../../store/authSlice";
import AuthContainer from "./AuthContainer";
import { formStyle } from "../../data/loginValidation";
import useAlert from "../../hooks/useAlert";

// component used in Home Page

interface ILoginProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginWindow = ({ onClick }: ILoginProps) => {
  // todo: take the backend error useState to page and pass it as a props
  const [backendError, setBackendError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [setAlert] = useAlert();

  const loginFormik: FormikProps<ILoginInitialValues> = useFormik({
    initialValues: { ...loginInitialValues },

    validationSchema: loginValidationSchema,

    // onSubmit use loginApiCall, coming from the loginValidation file, also use replace: true in navigation to remove loginPage from history
    onSubmit: async (values) => {
      loginApiCall(values)
        .then((res) => {
          if (values.dontLogout) {
            localStorage.setItem("userInfo", JSON.stringify(res.user));
          } else {
            sessionStorage.setItem("userInfo", JSON.stringify(res.user));
          }
          dispatch(changeAuth(res.user));
          setAlert("success", "Successfully logged in!");
          navigate("/Books", { replace: true });
        })
        .catch((err) => {
          setBackendError(err.response.data.message);
          setAlert("error", "Something went wrong! try again");
        });
    },
  });

  return (
    <AuthContainer information="Sign In to SwapBook" icon={<LoginIcon />}>
      <form style={formStyle} onSubmit={loginFormik.handleSubmit}>
        {/* email input */}
        <TextField
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
          helperText={
            (loginFormik.touched.email && loginFormik.errors.email) || " "
          }
          {...emailProps}
        ></TextField>

        {/* password input */}

        <TextField
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          error={
            loginFormik.touched.password && Boolean(loginFormik.errors.password)
          }
          helperText={
            (loginFormik.touched.password && loginFormik.errors.password) || " "
          }
          {...passwordProps}
        ></TextField>

        <FormControlLabel
          control={
            <Checkbox
              name="dontLogout"
              onChange={loginFormik.handleChange}
              id="dontLogout"
            />
          }
          label="Remember me"
        />
        <Button variant="contained" size="medium" type="submit">
          Sign in
        </Button>
        <FormHelperText error>{backendError || " "}</FormHelperText>
      </form>
      <Typography variant="body2" marginTop={"5px"}>
        You don't have an account yet?{" "}
        <Button variant="text" onClick={() => onClick(true)}>
          Sign up
        </Button>
      </Typography>
    </AuthContainer>
  );
};

export default LoginWindow;
