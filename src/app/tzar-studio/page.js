import React from "react";
import BStudioSlider from "../componants/TzarStudio/BStudioSlider";
import StudioShowcase from "../componants/TzarStudio/StudioShowcase";
import StudioClients from "../componants/TzarStudio/StudioClients";
import FoodShoot from "../componants/TzarStudio/FoodShoot";
import FoodShootCarousel from "../componants/TzarStudio/FoodShootCarousel";
const Page = () => {
  return (
    <>
      <BStudioSlider page="Tzar Studio" title="Our Studio"/>
      <StudioShowcase/>
      <StudioClients/>
      <FoodShootCarousel/>
      <FoodShoot/>
    </>
  );
};
export default Page;
