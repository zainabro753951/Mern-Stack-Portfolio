import React, { createContext, useContext, useEffect, useState } from "react";
import CheckAdminAuth from "../Secure/CheckAdminAuth";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const adminVerifyAuth = async () => {
      const checkAuth = await CheckAdminAuth();

      if (checkAuth) {
        setIsAdminAuthenticated(true);
        localStorage.setItem("adminData", JSON.stringify(checkAuth.adminData));
      } else {
        setIsAdminAuthenticated(false);
      }
      setIsAuthChecked(true);
    };
    adminVerifyAuth();
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{ isAdminAuthenticated, setIsAdminAuthenticated, isAuthChecked }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
