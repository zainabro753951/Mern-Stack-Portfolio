import React, { createContext, useContext, useEffect, useState } from "react";
import useCheckUserAuth from "../Secure/CheckUserAuth.js";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const { isSuccess, isError, isLoading } = useCheckUserAuth();

  useEffect(() => {
    if (isSuccess) {
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
      localStorage.removeItem("logedInUser"); // Clear user data if not authenticated
    }
  }, [isSuccess]);

  return (
    <UserAuthContext.Provider
      value={{ isUserAuthenticated, setIsUserAuthenticated, isLoading }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
