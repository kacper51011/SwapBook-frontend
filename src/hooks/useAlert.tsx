import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../store/alertsSlice";

const useAlert = () => {
  const dispatch = useDispatch();
  const setAlert = (typeOfAlert: "error" | "success", message: string) => {
    if (typeOfAlert === "error") {
      dispatch(setError(message));
    }
    if (typeOfAlert === "success") {
      dispatch(setSuccess(message));
    }
  };
  return [setAlert];
};

export default useAlert;
