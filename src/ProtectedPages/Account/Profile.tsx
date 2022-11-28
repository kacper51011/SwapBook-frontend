import ProfilePaper from "../../components/ProfilePaper";
import ProfileSecondPaper from "./ProfileSecondPaper";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import useFetchedUser from "../../hooks/useFetchedUser";
import useAsyncGet from "../../hooks/useAsyncGet";
import ProfileContainer from "./ProfileContainer";

const Profile = () => {
  const auth = useAppSelector((state) => state.auth?.user);
  const [data, getPersonalData] = useAsyncGet(
    "/api/users/account/profile",
    "couldn`t load the data, try again later"
  );

  const [fetchedNickname, fetchedEmail, fetchedNumberOfSwaps, { setUserData }] =
    useFetchedUser();

  useEffect(() => {
    getPersonalData();
    setUserData(data.user.nickname, data.user.email, data.user.swaps.length);
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
