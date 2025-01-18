import React from "react";
import PortfolioHero from "./components/portfolioHero";
import PortfolioProjects from "./components/PortfolioProjects";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";
const PortfolioPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <PortfolioHero />
      <PortfolioProjects />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default PortfolioPage;
