import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAuth } from "../store/authSlice";
import useAlert from "./useAlert";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [setAlert] = useAlert();
  // logout function will clean cookies (cookies http=true, so I had to use api call to delete the cookie in backend)
  // and also reset all the data of the user (saved in redux, localstorage and session storage)
  const logout = async () => {
    axios.delete("/api/users/logout").then((res) => {
      dispatch(changeAuth(""));
      localStorage.clear();
      sessionStorage.clear();
    });
    navigate("/");
    setAlert("success", "successfully logged out!");
  };

  return [logout];
};

export default useLogout;
