import React from "react";
import PageHeaderWebsiteD from "../componants/website-dev-services/PageHeaderWebsiteD";
// import WebsiteDesignCardsR from "../components/ServicesPG/WebsiteDesignCardsR";
// import TestimonialFour from "../components/ServicesPG/TestimonialFour";
// import TestimonialFive from "../components/ServicesPG/TestimonialFive";
// import BenefitsWD from "../components/ServicesPG/BenefitsWD";
// import WdService from "../components/ServicesPG/WdService";
import ServicesDetails from "../componants/website-dev-services/ServicesDetails/ServicesDetails";
import { websiteDevelopmentService } from "@/app/data/servicesDetails";
import WebsiteDesignCardsR from "../componants/website-dev-services/WebsiteDesignCardsR";
import TestimonialFour from "../componants/website-dev-services/TestimonialFour";
import TestimonialFive from "../componants/website-dev-services/TestimonialFive";
import BenefitsWD from "../componants/website-dev-services/BenefitsWD";
import ContactForm from "../componants/home/ContactForm";
import WdService from "../componants/website-dev-services/WdService";

const Page = () => {
  return (
    <>
      <PageHeaderWebsiteD
        parent="Services"
        title="Website Development"
        page="Website Development"
      />
      <ServicesDetails service={websiteDevelopmentService} />
      <WebsiteDesignCardsR/>
      <TestimonialFour/>
      <TestimonialFive/>
      <BenefitsWD/>
      <ContactForm/>
      <WdService/>
    </>
  );
};
export default Page;
