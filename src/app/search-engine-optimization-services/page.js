import React from "react";
import PageHeaderSeo from "../componants/SEOServices/PageHeaderSeo";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { LeadGenerationService1 } from "@/app/data/servicesDetails";
import SeoServiceCards from "../componants/SEOServices/SeoServiceCards";
import ImgTxtSecSeo from "../componants/SEOServices/ImgTxtSecSeo";

export const metadata = { 
  title:"Search Enigne optimization services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
<PageHeaderSeo page="Search Engine Optimization" title="Search Engine Optimization"  />
     <ServicesDetails service={LeadGenerationService1}/>
     <SeoServiceCards/>
     <ImgTxtSecSeo/>
     {/* 
      <BenefitsSEO/>
      <CTATwoSeo/>
      <WhatWeDoLG/>
      <SeoServices/> */}
    </>
  );
};
export default Page;
