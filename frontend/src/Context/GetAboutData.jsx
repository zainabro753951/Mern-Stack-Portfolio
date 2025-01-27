import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AboutDataContext = createContext();

export const GetAboutData = () => useContext(AboutDataContext);

export const GetAboutProvider = ({ children }) => {
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    let getData = async () => {
      let response = await axios.get("/api/admin/getAbout");
      setAboutData(response.data);
    };
    getData();
  }, []);

  return (
    <AboutDataContext.Provider value={{ aboutData, setAboutData }}>
      {children}
    </AboutDataContext.Provider>
  );
};
