import React from "react";
import PageHeaderLogoD from "../componants/LogoDService/PageHeaderLogoD";

import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { logodesigngService } from "@/app/data/servicesDetails";
import LogoDesignMU from "../componants/LogoDService/LogoDesignMU";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
import CountsLG from "../componants/LogoDService/Counts/CountsLG";
import WhyChooseUSLogo from "../componants/LogoDService/WhyChooseUSLogo";
// import PageHeaderLogoD from "../components/PageHeader/PageHeaderLogoD";
// import ServicesDetails from "../components/ServicesPG/ServicesDetails/ServicesDetails";
// import { logodesigngService } from "@/app/data/servicesDetails";
// import TestimonialThree from "../components/HomePG/Testimonial/TestimonialThree";
// import ContactForm from "../components/ContactForm/ContactForm";
// import LogoDesignMU from "../components/ServicesPG/LogoDesing/LogoDesignMU";
// import WhyChooseUSLogo from "../components/ServicesPG/LogoDesing/WhyChooseUSLogo";
// import CountsLG from "../components/ServicesPG/LogoDesing/Counts/CountsLG";

export const metadata = {
  title: "Logo Design services | Tzar Digital Marketing Agency in Mumbai",
  description: "Tzar Digital Marketing Agency",
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
      <CountsLG />
      <ContactForm />
    </>
  );
};
export default Page;
