import React from "react";
import TestimonialHero from "./components/TestimonialHero";
import TestimonialBody from "./components/TestimonialBody";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";

const TestimonialPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <TestimonialHero />
      <TestimonialBody />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default TestimonialPage;
