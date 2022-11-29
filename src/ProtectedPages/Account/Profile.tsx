import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "./ProfileSecondPaper";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import useFetchedUser from "../../hooks/useFetchedUser";

import ProfileContainer from "./ProfileContainer";
import useAlert from "../../hooks/useAlert";
import { setDefaultResultOrder } from "dns";
import axios from "axios";

const Profile = () => {
  const auth = useAppSelector((state) => state.auth?.user);
  const [setAlert] = useAlert();

  const [fetchedNickname, fetchedEmail, fetchedNumberOfSwaps, { setUserData }] =
    useFetchedUser();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get("/api/users/account/profile");
        setUserData(
          data.user.nickname,
          data.user.email,
          data.user.swaps.length
        );
      } catch (error) {
        setAlert("error", "couldn`t load the data, try again later");
      }
    };
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
          image={
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
