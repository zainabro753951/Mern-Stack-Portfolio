import React, { createContext, useContext, useEffect, useState } from "react";
import CheckAdminAuth from "../Secure/CheckAdminAuth.js";
import Cookies from "js-cookie";
export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const { isSuccess, isError, isPending } = CheckAdminAuth();
  const adminToken = JSON.parse(localStorage.getItem("adminToken"));

  useEffect(() => {
    if (isSuccess || adminToken) {
      setIsAdminAuthenticated(true);
    } else {
      setIsAdminAuthenticated(false);
      localStorage.removeItem("adminData"); // Clear user data if not authenticated
      localStorage.removeItem("adminToken");
    }
  }, [isSuccess]);

  return (
    <AdminAuthContext.Provider
      value={{ isAdminAuthenticated, setIsAdminAuthenticated, isPending }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
