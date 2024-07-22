import React from "react";
import BStudioSlider from "../componants/TzarStudio/BStudioSlider";
import StudioShowcase from "../componants/TzarStudio/StudioShowcase";
import StudioClients from "../componants/TzarStudio/StudioClients";
import FoodShoot from "../componants/TzarStudio/FoodShoot";
const Page = () => {
  return (
    <>
      <BStudioSlider page="Tzar Studio" title="Our Studio"/>
      <StudioShowcase/>
      <StudioClients/>
      <FoodShoot/>
    </>
  );
};
export default Page;
