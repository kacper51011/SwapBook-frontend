import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "./ProfileSecondPaper";
import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import useFetchedUser from "../../hooks/useFetchedUser";

import ProfileContainer from "./ProfileContainer";
import useAlert from "../../hooks/useAlert";
import axios from "axios";

const Profile = () => {
  const auth = useAppSelector((state) => state.auth?.user);
  const [setAlert] = useAlert();

  const [fetchedNickname, fetchedEmail, fetchedNumberOfSwaps, { setUserData }] =
    useFetchedUser();
  const getProfile = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/users/account/profile");
      setUserData(data.user.nickname, data.user.email, data.user.swaps.length);
      console.log(123);
    } catch (error) {
      setAlert("error", "couldn`t load the data, try again later");
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileContainer
      children1={
        <ProfilePaper
          xsWidth="1"
          smWidth="1"
          avatarMargin="7vw"
          email={fetchedEmail || ""}
          nickname={fetchedNickname || ""}
          swapsNumber={fetchedNumberOfSwaps || 0}
          photo={
            auth.photo
              ? `http://localhost:5000//images/users/${auth.photo}`
              : ""
          }
        />
      }
      children2={
        <ProfileSecondPaper
          email={fetchedEmail || ""}
          nickname={fetchedNickname || ""}
          setUserData={setUserData}
        />
      }
    />
  );
};

export default Profile;
