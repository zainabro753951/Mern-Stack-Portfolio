import React from "react";
import TestimonialHero from "./components/TestimonialHero";
import TestimonialBody from "./components/TestimonialBody";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const TestimonialPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <TestimonialHero />
      <TestimonialBody />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default TestimonialPage;
