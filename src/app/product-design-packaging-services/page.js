import React from "react";
import PageHeaderPPD from "../componants/productDservices/PageHeaderPPD";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { LeadGenerationService2 } from "@/app/data/servicesDetails";
import PackagingDesignServ from "../componants/productDservices/PackagingDesignServ";
import SomeFacts from "../componants/LeadGServices/SomeFacts";
import CountsLG from "../componants/LogoDService/Counts/CountsLG";
import ContactForm from "../componants/home/ContactForm";
// import PageHeaderPPD from "../components/PageHeader/PageHeaderFAQ";
// import ServicesDetails from "../components/ServicesPG/ServicesDetails/ServicesDetails";
// import { LeadGenerationService2 } from "@/app/data/servicesDetails";
// import PackagingDesignServ from "../components/ServicesPG/ProductDesign/PackagingDesignServ";
// import CountsLG from "../components/ServicesPG/LogoDesing/Counts/CountsLG";
// import SomeFacts from "../components/ServicesPG/LeadGeneration/SomeFacts";
// import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = { 
  title:"Product design packaging services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}


const Page = () => {
  return (
    <>
    <PageHeaderPPD title="PRODUCT DESIGN PACKAGING SERVICE"/>
    <ServicesDetails service={LeadGenerationService2} />
    <PackagingDesignServ/>
    <SomeFacts/>
    <CountsLG/>
    <ContactForm/>
    </>
  );
};
export default Page;
