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
      {/* <WebsiteDesignCardsR/>
      <TestimonialFour/>
      <TestimonialFive/>
      <BenefitsWD/>
      <WdService/> */}
    </>
  );
};
export default Page;
