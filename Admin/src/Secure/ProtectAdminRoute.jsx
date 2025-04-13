import React from "react";
import { Navigate } from "react-router-dom";
import WelcomeLoader from "../Components/WelcomeLoader";

const ProtectAdminRoute = ({ isAdminAuthenticated, isPending, children }) => {
  if (isPending) {
    return <WelcomeLoader />; // You can replace this with any loading spinner
  }

  if (isAdminAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectAdminRoute;
