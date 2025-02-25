import React, { createContext, useState } from "react";

const SidebarToggleContext = createContext();

const SideBarToggle = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <SidebarToggleContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};

export { SideBarToggle, SidebarToggleContext };
