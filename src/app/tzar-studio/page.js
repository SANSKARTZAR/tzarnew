import React from "react";
// import PageHeaderTeam from "../components/PageHeader/PageHeaderTeam";
import BStudioSlider from "../componants/TzarStudio/BStudioSlider";
import StudioShowcase from "../componants/TzarStudio/StudioShowcase";
import StudioClients from "../componants/TzarStudio/StudioClients";
// import StudioShowcase from "../components/TzarStudioPG/StudioShowcase";
// import StudioClients from "../components/TzarStudioPG/StudioClients";
// import FoodShoot from "../components/TzarStudioPG/FoodShoot";

const Page = () => {
  return (
    <>
      {/* <PageHeaderTeam  /> */}
      <BStudioSlider page="Tzar Studio" title="Our Studio"/>
      <StudioShowcase/>
      <StudioClients/>
      {/* 
      <StudioClients/>
      <FoodShoot/> */}
    </>
  );
};
export default Page;
