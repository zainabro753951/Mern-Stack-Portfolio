import React, { useState, useEffect, createContext, useContext } from "react";

const AdminDataContext = createContext();

export const GetAdminData = () => {
  return useContext(AdminDataContext);
};

export const AdminDataProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    let getAdminData = () => {
      let adminData = localStorage.getItem("admin");
      let data = JSON.parse(adminData);
      setAdminData(data);
    };
    getAdminData();
  }, []);
  return (
    <AdminDataContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminDataContext.Provider>
  );
};
