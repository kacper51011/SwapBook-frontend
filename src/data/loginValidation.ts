import * as yup from "yup";
import axios from "axios";
import { CSSProperties } from "react";
import { TextFieldProps } from "@mui/material";

interface ILoginInitialValues {
  email: string;
  password: string;
  dontLogout: boolean;
}
const loginInitialValues: ILoginInitialValues = {
  email: "",
  password: "",
  dontLogout: false,
};
const requiredError: string = "This field is required";

const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required(requiredError),
  password: yup.string().required(requiredError),
  dontLogout: yup.boolean(),
});

const loginApiCall = async (values: ILoginInitialValues) => {
  const { email, password, dontLogout } = values;
  const { data } = await axios.post("/api/users/login", {
    email,
    password,
    dontLogout,
  });
  return data;
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const emailProps: TextFieldProps = {
  label: "email",
  name: "email",
  id: "email",
  type: "email",
  autoFocus: true,
};

const passwordProps: TextFieldProps = {
  label: "password",
  name: "password",
  id: "password",
  type: "password",
};

export {
  loginApiCall,
  loginInitialValues,
  loginValidationSchema,
  type ILoginInitialValues,
  formStyle,
  emailProps,
  passwordProps,
};
