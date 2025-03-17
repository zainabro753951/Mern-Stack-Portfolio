import React, { createContext, useContext, useEffect, useState } from "react";
import CheckAdminAuth from "../Secure/CheckAdminAuth.js";
export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const adminVerifyAuth = async () => {
      try {
        const checkAuth = await CheckAdminAuth();
        if (checkAuth) {
          setIsAdminAuthenticated(true);
          localStorage.setItem(
            "adminData",
            JSON.stringify(checkAuth.adminData)
          );
        } else {
          setIsAdminAuthenticated(false);
          localStorage.removeItem("adminData"); // Clear adminData if not authenticated
        }
      } catch (error) {
        console.error("Error verifying admin auth:", error);
        setIsAdminAuthenticated(false);
        localStorage.removeItem("adminData"); // Clear adminData on error
      } finally {
        setIsAuthChecked(true); // Ensure auth check is marked as complete
      }
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
