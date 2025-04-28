import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import PortfolioDetailsHero from "./components/PortfolioDetailsHero";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useProjects } from "../../Context/GetProject";

const PortfolioDetails = () => {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const { projects, setProjects } = useProjects();
  const [project, setProject] = useState({});

  useEffect(() => {
    if (!slug && !id) {
      navigate("/portfolio", { replace: true });
    } else {
      const project = projects?.find(
        (project) => project?.projectSlug === slug || project?._id === id
      );
      if (!project) {
        navigate("/portfolio", { replace: true });
      }
      setProject(project);
    }
  }, [navigate, slug, id, projects]);
  console.log(project);

  return (
    <>
      <Header />
      <MobileHeader />
      <PortfolioDetailsHero projectName={project?.projectName} />
      <Footer footerText={"Have a Project"} text={"Contact me"} />
    </>
  );
};

export default PortfolioDetails;
