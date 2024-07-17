import React from "react";
import PageHeaderCK from "../componants/CloudKServices/PageHeaderCK";
import CloudKitchenMarketing from "../componants/CloudKServices/CloudKitchenMarketing";
import FactFollow from "../componants/CloudKServices/FactFollow";
import ContactForm from "../componants/home/ContactForm";
import BenefitsCKM from "../componants/CloudKServices/BenefitsCKM";

export const metadata = { 
  title:"Cloud kitchen marketing services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
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
