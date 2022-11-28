import React, { useState } from "react";

const useFetchedUser = () => {
  const [fetchedNickname, setFetchedNickname] = useState<string>("");
  const [fetchedEmail, setFetchedEmail] = useState<string>("");
  const [fetchedNumberOfSwaps, setFetchedNumberOfSwaps] = useState<number>(0);

  const setUserData = (
    // setting up default values and types of function(its not necessary to use every paremeter)
    nickname: string = fetchedNickname,
    email: string = fetchedEmail,
    numberOfSwaps: number = fetchedNumberOfSwaps
  ) => {
    nickname && setFetchedNickname(nickname);
    email && setFetchedEmail(email);
    numberOfSwaps && setFetchedNumberOfSwaps(numberOfSwaps);
  };

  return [
    fetchedNickname,
    fetchedEmail,
    fetchedNumberOfSwaps,
    { setUserData },
  ] as const;
};

export default useFetchedUser;
