import React from "react";
import ServicesThree from "../componants/services/ServicesThree";
import PageHeaderServices from "../componants/services/PageHeaderServices";
import ContactForm from "../componants/home/ContactForm";

export const metadata = {
  title: "Services - Tzar Venture Online Digital Marketing Services - Tzar Venture",
  description: "Services - End to End Digital Marketing Services Online."
}


const Page = () => {
  return (
    <>
      <PageHeaderServices title="Services" />
      <ServicesThree />
      <ContactForm />
    </>
  );
};
export default Page;
