import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authAdmin, setAuthAdmin] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setAuthAdmin(decodedToken);
      setTimeout(() => setLoading(false), 1000);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authAdmin, setAuthAdmin, Loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
