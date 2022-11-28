import axios from "axios";
import React, { useState } from "react";
import useAlert from "./useAlert";

const useProfileDataUpdate = () => {
  const [setAlert] = useAlert();
  const [nicknameEditValue, setEditedNicknameValue] = useState("");
  const [emailEditValue, setEditedEmailValue] = useState("");
  const [passwordEditValue, setEditedPasswordValue] = useState("");
  const handleNicknameChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        nickname: nicknameEditValue,
      });

      setAlert("success", "nickname changed successfully");
    } catch (err) {
      setAlert("error", "something went wrong, try other nickname");
    }
  };
  // toggleNicknameEdit(!nicknameEdit);
  // setUserData((nickname = nicknameEditValue));
  const handleEmailChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        email: emailEditValue,
      });
      setAlert("success", "Email changed successfuly!");
    } catch (err) {
      setAlert("error", "Something went wrong, try other Email");
    }
  };
  // setUserData((email = emailEditValue));
  // toggleEmailEdit(!emailEdit);
  const handlePasswordChangeSave = async () => {
    try {
      await axios.put("/api/users/account/update", {
        password: passwordEditValue,
      });
      setAlert("success", "password changed successfully");
    } catch (err) {
      setAlert("success", "something went wrong, try other Password");
    }
  };

  return [
    nicknameEditValue,
    emailEditValue,
    setEditedNicknameValue,
    setEditedEmailValue,
    setEditedPasswordValue,
    handleNicknameChangeSave,
    handleEmailChangeSave,
    handlePasswordChangeSave,
  ] as const;
};
export default useProfileDataUpdate;
