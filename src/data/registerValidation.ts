import * as yup from "yup";
import axios from "axios";

interface IRegisterInitialValues {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerInitialValues: IRegisterInitialValues = {
  nickname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const requiredError: string = "This field is required";
const minError = (characters: number) => {
  return `this field require minimum ${characters} characters`;
};
const maxError = (characters: number) => {
  return `this field require maximum ${characters} characters`;
};

const registerValidationSchema = yup.object({
  nickname: yup
    .string()
    .required(requiredError)
    .min(5, minError(5))
    .max(20, maxError(20)),
  email: yup.string().email("Invalid email").required(requiredError),
  password: yup.string().required(requiredError).min(6, minError(6)),
  confirmPassword: yup
    .string()
    .required(requiredError)
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const registerApiCall = async (values: IRegisterInitialValues) => {
  const { nickname, email, password, confirmPassword } = values;
  const { data } = await axios.post("/api/users/signup", {
    nickname,
    email,
    password,
    confirmPassword,
  });
  return data;
};

const nicknameProps = {
  label: "Nickname",
  name: "nickname",
  id: "nickname",
  type: "text",
  autoFocus: true,
};

const passwordProps = {
  placeholder: "Password",
  type: "password",
  name: "password",
  id: "password",
  label: "password",
};

const emailProps = {
  label: "Email",
  name: "email",
  id: "email",
  type: "email",
};

const confirmPasswordProps = {
  type: "password",
  placeholder: "Confirm password",
  name: "confirmPassword",
  id: "confirmPassword",
  label: "Confirm password",
};

export {
  registerApiCall,
  registerInitialValues,
  registerValidationSchema,
  type IRegisterInitialValues,
  emailProps,
  passwordProps,
  confirmPasswordProps,
  nicknameProps,
};
