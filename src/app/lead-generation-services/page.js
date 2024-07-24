import React from "react";
import PageHeaderLeadG from "../componants/LeadGServices/PageHeaderLeadG";
import LeadGeneration from "../componants/LeadGServices/LeadGeneration";
import WhatWeDoLG from "../componants/LeadGServices/WhatWeDoLG";
import ImgTxtSecLG from "../componants/LeadGServices/ImgTxtSecLG";
import SomeFacts from "../componants/LeadGServices/SomeFacts";
import ContactForm from "../componants/home/ContactForm";
// import PageHeaderLeadG from "../components/PageHeader/PageHeaderLeadG";
// import ContactForm from "../components/ContactForm/ContactForm";
// import LeadGeneration from "../components/ServicesPG/LeadGeneration/LeadGeneration";
// import WhatWeDoLG from "../components/ServicesPG/LeadGeneration/WhatWeDoLG";
// import ImgTxtSecLG from "../components/ServicesPG/LeadGeneration/ImgTxtSecLG";
// import SomeFacts from "../components/ServicesPG/LeadGeneration/SomeFacts";

export const metadata = {
  title: "Lead Generation Services - Get 100% Qualified Leads for B2B and B2C Companies | Tzar Venture",
  description: "Lead Generation Services - Get 100% Qualified leads for B2B, B2C, Edu tech & Startups - Tzar Venture"
}


const Page = () => {
  return (
    <>
      <PageHeaderLeadG page="Lead Generation" title="Lead Generation" />
      <LeadGeneration />
      <WhatWeDoLG />
      <ImgTxtSecLG />
      <SomeFacts />
      <ContactForm />
    </>
  );
};
export default Page;
