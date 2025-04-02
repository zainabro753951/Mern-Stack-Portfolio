import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import WelcomeLoader from "../components/WelcomeLoader";

const ProtectUserRoute = ({ isUserAuthenticated, isLoading, children }) => {
  const location = useLocation();

  if (isLoading) {
    return (
      <div>
        <WelcomeLoader />
      </div>
    );
  }

  if (!isUserAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectUserRoute;
