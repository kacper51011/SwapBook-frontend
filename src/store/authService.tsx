import axios from "axios";
import { IRegisterInitialValues } from "../data/registerValidation";

const URL = "/users/signup";

const registerUser = async (user: IRegisterInitialValues) => {
  const response = await axios.post(URL, user);

  if (response.status === 201 && response.data) {
    return response.data;
  } else {
    return Error(response.data);
  }
};
export { registerUser };
