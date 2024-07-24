import React from "react";
import PageHeaderCK from "../componants/CloudKServices/PageHeaderCK";
import CloudKitchenMarketing from "../componants/CloudKServices/CloudKitchenMarketing";
import FactFollow from "../componants/CloudKServices/FactFollow";
import ContactForm from "../componants/home/ContactForm";
import BenefitsCKM from "../componants/CloudKServices/BenefitsCKM";

export const metadata = { 
  title:"Content Marketing Services Online  - To Grow Traffic & Sales Online | Tzar Venture",
  description:"Online Content Marketing Services will help you to grow brands, website tarffic & Sale through online digital marketing channels @ Tzar venture." 
}

const Page = () => {
  return (
    <>
    <PageHeaderCK title="cloud kitchen marketing" />
    <CloudKitchenMarketing/>
    <FactFollow/>
    <BenefitsCKM/>
    <ContactForm/>
    </>
  );
};
export default Page;
