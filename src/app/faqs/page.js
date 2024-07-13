import React from "react";
import FaqPage from "../componants/faqs/FaqPage";
import CTAOne from "../componants/home/CTAOne";
import PageHeaderFAQ from "../componants/faqs/PageHeaderFAQ";
import ContactForm from "../componants/home/ContactForm";

export const metadata = { 
  title:"FAQs | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
      <PageHeaderFAQ title="FAQs" />
      <FaqPage />
      <ContactForm/>
      <CTAOne />
    </>
  );
};
export default Page;
