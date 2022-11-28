import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePhoto } from "../store/authSlice";
import useAlert from "./useAlert";

const usePhoto = () => {
  const [photo, setEditedPhotoValue] = useState<File | null>(null);
  const [setAlert] = useAlert();
  const dispatch = useDispatch();

  const handlePhotoChangeSave: React.MouseEventHandler = () => {
    const photoCall = async () => {
      const data = new FormData();
      if (photo) {
        data.append("photo", photo);
      }

      try {
        if (photo) {
          const newUserData = await axios.post(
            "/api/users/account/upload",
            data
          );
          dispatch(changePhoto(newUserData.data.data));

          setAlert("success", "photo set successfully");
        }
      } catch (err) {
        setAlert("error", "Something went wrong, try other image");
      }
    };

    photoCall();
  };

  return [setEditedPhotoValue, handlePhotoChangeSave] as const;
};

export default usePhoto;
