import React from "react";
import ServicesThree from "../componants/services/ServicesThree";
import PageHeaderServices from "../componants/services/PageHeaderServices";
import ContactForm from "../componants/home/ContactForm";

export const metadata = { 
  title:"Our services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}


const Page = () => {
  return (
    <>
      <PageHeaderServices title="Services" />
      <ServicesThree />
      <ContactForm/>
    </>
  );
};
export default Page;
