import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  return { isDarkMode, setIsDarkMode };
};

export default ToggleTheme;
