import React from "react";
// import AdsServices from "../components/OutdoorAdsPG/AdsServices";
// import PrimeClients from "../components/OutdoorAdsPG/PrimeClients";
// import AdsSingup from "../components/OutdoorAdsPG/AdsSingup";
import OutdoorHeader from "../componants/OutdoorAds/OutdoorHeader";
import AdsServices from "../componants/OutdoorAds/AdsServices";
import AdsSingup from "../componants/OutdoorAds/AdsSingup";
import PrimeClients from "../componants/OutdoorAds/PrimeClients";

export const metadata = { 
  title:"Outdoor ads services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Outdoorads = ()=> {
  return (
    <>
    <OutdoorHeader/>
    <AdsServices/>
    <AdsSingup/>
    <PrimeClients/>
    </>
  );
};
export default Outdoorads;
