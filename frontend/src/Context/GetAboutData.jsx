import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAdminAuth } from "./AdminAuthProvider";

const AboutDataContext = createContext();

export const GetAboutData = () => useContext(AboutDataContext);

export const GetAboutProvider = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [aboutData, setAboutData] = useState();
  console.log(aboutData);
  
  useEffect(() => {
    if (isAdminAuthenticated) {
      let getData = async () => {
        let response = await axios.get("http://localhost:3000/admin/getAbout", {
          withCredentials: true,
        });
        setAboutData(response.data);
      };
      getData();
    }
  }, [isAdminAuthenticated]);

  return (
    <AboutDataContext.Provider value={{ aboutData, setAboutData }}>
      {children}
    </AboutDataContext.Provider>
  );
};
