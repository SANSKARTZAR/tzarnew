import React from "react";
import PageHeaderLeadG from "../componants/LeadGServices/PageHeaderLeadG";
import LeadGeneration from "../componants/LeadGServices/LeadGeneration";
// import PageHeaderLeadG from "../components/PageHeader/PageHeaderLeadG";
// import ContactForm from "../components/ContactForm/ContactForm";
// import LeadGeneration from "../components/ServicesPG/LeadGeneration/LeadGeneration";
// import WhatWeDoLG from "../components/ServicesPG/LeadGeneration/WhatWeDoLG";
// import ImgTxtSecLG from "../components/ServicesPG/LeadGeneration/ImgTxtSecLG";
// import SomeFacts from "../components/ServicesPG/LeadGeneration/SomeFacts";

export const metadata = { 
  title:"Lead generation services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}


const Page = () => {
  return (
    <>
    <PageHeaderLeadG page="Lead Generation" title="Lead Generation"/>
    <LeadGeneration/>
     {/* <LeadGeneration/>
      <WhatWeDoLG/>
      <ImgTxtSecLG/>
      <SomeFacts/>
      <ContactForm/> */}
    </>
  );
};
export default Page;
