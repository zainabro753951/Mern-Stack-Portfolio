import React from "react";
import { Navigate } from "react-router-dom";
import WelcomeLoader from "../components/WelcomeLoader";

const ProtectAdminRoute = ({
  isAdminAuthenticated,
  isAuthChecked,
  children,
}) => {
  if (!isAuthChecked) {
    return <WelcomeLoader />; // You can replace this with any loading spinner
  }

  if (isAdminAuthenticated) {
    return children;
  }

  return <Navigate to="/admin/login" />;
};

export default ProtectAdminRoute;
