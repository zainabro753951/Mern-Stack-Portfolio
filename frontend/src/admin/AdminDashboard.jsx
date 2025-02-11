import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeDashboard from "./Pages/HomeDashboard/HomeDashboard";
import Login from "./components/Login";
import AddAbout from "./Pages/addAbout/AddAbout";
import { useAuth } from "../Context/AuthProvider";
import ViewAbout from "./Pages/ViewAbout/ViewAbout";
import AddEducationPgae from "./Pages/addEducation/AddEducationPgae";
import ViewEducationPage from "./Pages/viewEducation/viewEducationPage";
import EditEducation from "./Pages/editEducation/EditEducation";

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
          path="/addEducation"
          element={
            authAdmin ? <AddEducationPgae /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          path="/viewEducation"
          element={
            authAdmin ? <ViewEducationPage /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          path="/editEducation/:id"
          element={
            authAdmin ? <EditEducation /> : <Navigate to={"/admin/login"} />
          }
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
