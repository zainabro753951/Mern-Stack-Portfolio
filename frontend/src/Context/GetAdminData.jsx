import React, { useState, useEffect, createContext, useContext } from "react";
import { useAdminAuth } from "./AdminAuthProvider";

export const AdminDataContext = createContext();

export const GetAdminData = () => {
  return useContext(AdminDataContext);
};

export const AdminDataProvider = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    if (isAdminAuthenticated) {
      let getAdminData = () => {
        let adminData = localStorage.getItem("adminData");
        let data = JSON.parse(adminData);
        setAdminData(data);
      };
      getAdminData();
    }
  }, [isAdminAuthenticated]);
  return (
    <AdminDataContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminDataContext.Provider>
  );
};
