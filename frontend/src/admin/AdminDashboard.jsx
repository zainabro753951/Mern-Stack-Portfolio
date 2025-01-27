import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeDashboard from "./Pages/HomeDashboard/HomeDashboard";
import Login from "./components/Login";
import AddAbout from "./Pages/addAbout/AddAbout";
import { useAuth } from "../Context/AuthProvider";
import ViewAbout from "./Pages/ViewAbout/ViewAbout";

const AdminDashboard = () => {
  let { authAdmin, setAuthAdmin, loading } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authAdmin ? <HomeDashboard /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          path="/addAbout"
          element={authAdmin ? <AddAbout /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          path="/viewAbout"
          element={authAdmin ? <ViewAbout /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          path="/login"
          element={authAdmin ? <Navigate to={"/admin"} /> : <Login />}
        />
      </Routes>
    </>
  );
};

export default AdminDashboard;
