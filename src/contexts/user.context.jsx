import { createContext, useState } from "react";

//actual value for access - the storage
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//literal function componenet - to wrap the app component in
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};