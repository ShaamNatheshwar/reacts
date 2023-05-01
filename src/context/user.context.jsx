import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
        console.log(user);
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user)
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
