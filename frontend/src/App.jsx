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
const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Portfolio"} element={<PortfolioPage />} />
        <Route path={"/Testimonials"} element={<TestimonialPage />} />
        <Route path={"/Blog"} element={<BlogPage />} />
        <Route path={"/Contact"} element={<ContactPage />} />
        <Route path={"/Admin/*"} element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
