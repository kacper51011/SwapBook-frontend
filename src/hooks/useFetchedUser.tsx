import React, { useState } from "react";

const useFetchedUser = () => {
  const [fetchedNickname, setFetchedNickname] = useState<string>("");
  const [fetchedEmail, setFetchedEmail] = useState<string>("");
  const [fetchedNumberOfSwaps, setFetchedNumberOfSwaps] = useState<number>();

  const setUserData = (
    nickname?: string,
    email?: string,
    numberOfSwaps?: number
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
