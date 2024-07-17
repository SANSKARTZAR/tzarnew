import React from "react";
import PageHeaderPPC from "../componants/payperclickservice/PageHeaderPPC";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { PayPerClickService } from "@/app/data/servicesDetails";
import PayperClickMgmt from "../componants/payperclickservice/PayperClickMgmt";
import PayperClickmgmtS from "../componants/payperclickservice/PayperClickmgmtS";
import BenefitsPPC from "../componants/payperclickservice/BenefitsPPC";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
// import PayperClickMgmt from "../components/ServicesPG/PayPerClick/PayperClickMgmt";
// import PayperClickmgmtS from "../components/ServicesPG/PayPerClick/PayperClickmgmtS";
// import TestimonialThree from "../components/HomePG/Testimonial/TestimonialThree";
// import ContactForm from "../components/ContactForm/ContactForm";
// import BenefitsPPC from "../components/ServicesPG/PayPerClick/BenefitsPPC";

export const metadata = {
  title: "Pay per clicks services | Tzar Digital Marketing Agency in Mumbai",
  description: "Tzar Digital Marketing Agency",
}


const Page = () => {
  return (
    <>
      <PageHeaderPPC page="Pay Per Click" title="Pay Per Click" />
      <ServicesDetails service={PayPerClickService} />
      <PayperClickMgmt />
      <PayperClickmgmtS />
      <BenefitsPPC />
      <TestimonialThree />
      <ContactForm />
    </>
  );
};
export default Page;
