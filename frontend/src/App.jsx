import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import CustomeCursor from "./components/CustomeCursor";
import MobileHeader from "./components/MobileHeader";
import About from "./pages/about/About";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import TestimonialPage from "./pages/Testimonial/TestimonialPage";
import ContactPage from "./pages/contact/contactPage";
import BlogPage from "./pages/blog/BlogPage";
import AdminDashboard from "./admin/AdminDashboard";
import WelcomeLoader from "./components/WelcomeLoader";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/portfolio"} element={<PortfolioPage />} />
        <Route path={"/testimonial"} element={<TestimonialPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/admin/*"} element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<WelcomeLoader />} /> */}
      </Routes>
    </>
  );
};

export default App;
