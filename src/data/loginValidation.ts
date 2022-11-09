import * as yup from "yup";
import axios from "axios";

interface ILoginInitialValues {
  email: string;
  password: string;
}
const loginInitialValues: ILoginInitialValues = {
  email: "",
  password: "",
};
const requiredError: string = "This field is required";

const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required(requiredError),
  password: yup.string().required(requiredError),
});

const loginApiCall = async (values: ILoginInitialValues) => {
  const { email, password } = values;
  const { data } = await axios.post("/api/users/signup", {
    email,
    password,
  });
  return data;
};

export {
  loginApiCall,
  loginInitialValues,
  loginValidationSchema,
  type ILoginInitialValues,
};
