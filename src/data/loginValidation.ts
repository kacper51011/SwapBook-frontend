import * as yup from "yup";
import axios from "axios";

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

export {
  loginApiCall,
  loginInitialValues,
  loginValidationSchema,
  type ILoginInitialValues,
};
