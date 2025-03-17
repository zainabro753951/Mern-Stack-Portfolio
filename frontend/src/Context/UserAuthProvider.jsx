import React, { createContext, useContext, useEffect, useState } from "react";
import CheckUserAuth from "../Secure/CheckUserAuth.js";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const userVerfiyAuth = async () => {
      try {
        const checkAuth = await CheckUserAuth();
        if (checkAuth) {
          setIsUserAuthenticated(true);
        } else {
          setIsUserAuthenticated(false);
          localStorage.removeItem("logedInUser"); // Clear adminData if not authenticated
        }
      } catch (error) {
        console.error("Error verifying admin auth:", error);
        setIsUserAuthenticated(false);
        localStorage.removeItem("logedInUser"); // Clear adminData on error
      } finally {
        setIsAuthChecked(true); // Ensure auth check is marked as complete
      }
    };
    userVerfiyAuth();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ isUserAuthenticated, setIsUserAuthenticated, isAuthChecked }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
