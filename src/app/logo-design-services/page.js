import React from "react";
import PageHeaderLogoD from "../componants/LogoDService/PageHeaderLogoD";

import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { logodesigngService } from "@/app/data/servicesDetails";
import LogoDesignMU from "../componants/LogoDService/LogoDesignMU";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
import CountsLG from "../componants/LogoDService/Counts/CountsLG";
import WhyChooseUSLogo from "../componants/LogoDService/WhyChooseUSLogo";

export const metadata = {
  title:"Logo Design Services - Custom Logo Design. Business logos design by professionls online - Tzar venture",
    description:"Custom Logo Design Services Online - Tzar Venture do not sell products we make ICONIC Brands. " 
}


const Page = () => {
  return (
    <>
      <PageHeaderLogoD parent="Services"
        title="LOGO DESIGNING"
        page="LOGO DESIGNING" />
      <ServicesDetails service={logodesigngService} />
      <LogoDesignMU />
      <TestimonialThree />
      <WhyChooseUSLogo />
      {/* <CountsLG /> */}
      <ContactForm />
    </>
  );
};
export default Page;
