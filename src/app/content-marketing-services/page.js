import React from "react";
import PageHeaderCmm from "../componants/CMMservices/PageHeaderCmm";
import ContentMarketing from "../componants/CMMservices/ContentMarketing";
// import PageHeaderCmm from "../components/PageHeader/PageHeaderCmm";
// import ContactForm from "../components/ContactForm/ContactForm";
// import ContentMarketing from "../components/ServicesPG/ContentMarketing/ContentMarketing";
// import ContentmarketingcardsR from "../components/ServicesPG/ContentMarketing/ContentmarketingcardsR";
// import WhyusCM from "../components/ServicesPG/ContentMarketing/WhyusCM";

export const metadata = { 
  title:"Content marketing services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
    <PageHeaderCmm title="content Marketing" />
    <ContentMarketing/>
      {/* 
      <ContentmarketingcardsR/>
      <WhyusCM/>
      <ContactForm/> */}
    </>
  );
};
export default Page;
