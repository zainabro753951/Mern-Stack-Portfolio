import React from "react";
import PortfolioHero from "./components/PortfolioHero";
import PortfolioProjects from "./components/PortfolioProjects";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
const PortfolioPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <PortfolioHero />
      <PortfolioProjects />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default PortfolioPage;
