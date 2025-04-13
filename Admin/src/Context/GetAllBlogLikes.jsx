import React, { createContext, useContext, useState } from "react";

export const LikesContext = createContext();

export const GetAllBlogLikes = ({ children }) => {
  const [likes, setLikes] = useState([]);
  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikesContext.Provider>
  );
};
