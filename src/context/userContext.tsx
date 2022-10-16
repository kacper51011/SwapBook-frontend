import React, { useState, createContext } from "react";

const UserContext = createContext({});
type UserProviderProps = React.PropsWithChildren<{}>;

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isUserAutorized, SetUserAuthorization] = useState(false);
  return (
    <UserContext.Provider value={{ isUserAutorized, SetUserAuthorization }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
