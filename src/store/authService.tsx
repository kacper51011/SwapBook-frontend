import axios from "axios";
import { IRegisterInitialValues } from "../data/registerValidation";

const URL = "/users/signup";

export const register = async (user: IRegisterInitialValues) => {
  try {
    const response = await axios.post(URL, user);
  } catch (err) {}
};
